import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import makeAPIRequest from '../../../utilities/apiServices';
import {PURGE} from 'redux-persist';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProductsList = createAsyncThunk(
  'product/fetchProductsList',
  async (paylaod, {rejectWithValue}) => {
    try {
      const response = await makeAPIRequest(
        'get',
        'https://fakestoreapi.com/products',
      );
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchProductsList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action?.payload || [];
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      .addCase(PURGE, () => initialState);
  },
});

export default productSlice.reducer;

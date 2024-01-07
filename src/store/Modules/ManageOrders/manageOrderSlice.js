import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import makeAPIRequest from '../../../utilities/apiServices';
import {PURGE} from 'redux-persist';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const makeProductOrder = createAsyncThunk(
  'manageOrder/makeProductOrder',
  async (paylaod, {rejectWithValue}) => {
    try {
      const response = await makeAPIRequest(
        'post',
        'https://webhook.site/fe17fc76-5861-4073-a113-e01b205d9953',
        paylaod,
      );
      return {...response, orders: paylaod};
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const manageOrderSlice = createSlice({
  name: 'manageOrder',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(makeProductOrder.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeProductOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload.orders);
      })
      .addCase(makeProductOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      .addCase(PURGE, () => initialState);
  },
});

export default manageOrderSlice.reducer;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import makeAPIRequest from '../../../utilities/apiServices';
import {PURGE} from 'redux-persist';

const initialState = {
  isAuthUser: false,
  loading: false,
  error: null,
};

export const signinUser = createAsyncThunk(
  'auth/signinUser',
  async (paylaod, {rejectWithValue}) => {
    try {
      const response = await makeAPIRequest(
        'post',
        'https://reqres.in/api/login',
        paylaod,
      );
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(signinUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.token) {
          state.isAuthUser = true;
          AsyncStorage.setItem('token', action.payload.token);
        }
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      .addCase(PURGE, () => initialState);
  },
});

export default authSlice.reducer;

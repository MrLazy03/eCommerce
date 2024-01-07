import {createSlice} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      action.payload &&
        state.cartItems.push({item: action.payload, quantity: 1});
    },

    removeItemFromCart: (state, action) => {
      const indexToRemove = state.cartItems.findIndex(
        product => product.item?.id == action.payload,
      );
      if (indexToRemove != -1) state.cartItems.splice(indexToRemove, 1);
    },

    updateItemQuantity: (state, action) => {
      const indexToUpdate = state.cartItems.findIndex(
        product => product.item?.id == action.payload?.productId,
      );

      if (indexToUpdate === -1) {
        return;
      }
      if (action.payload.type === 'INCREASE') {
        state.cartItems[indexToUpdate].quantity += 1;
      } else {
        if (state.cartItems[indexToUpdate]?.quantity > 0)
          state.cartItems[indexToUpdate].quantity -= 1;
      }
    },
    emptyCart: (state, action) => {
      state.cartItems = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  emptyCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;

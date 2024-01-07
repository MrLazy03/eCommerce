import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './Modules/Authentication/authSlice.js';
import productReducer from './Modules/Products/productSlice.js';
import cartReducer from './Modules/ShoppingCart/shoppingCartSlice.js';
import manageOrderReducer from './Modules/ManageOrders/manageOrderSlice.js';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  shoppingCart: cartReducer,
  manageOrders: manageOrderReducer,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import {
  addCartReducer,
  addFavoriteReducer,
  productReducer,
  productReducerMen,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  menProducts: productReducerMen,
  favorites: addFavoriteReducer,
  cart: addCartReducer,
});

export default reducers;

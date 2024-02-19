// productReducer.js

import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
  cart: [],
};

export const productReducer = (
  state = initialState.products,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const productReducerMen = (
  state = initialState.products,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_MEN:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const addFavoriteReducer = (
  state = { favorite: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_FAVORITE:
      const { product } = payload;
      const itemFavorite = state.favorite.find(
        (item) => item.id === product.id
      );

      if (!itemFavorite) {
        const newFavorite = [...state.favorite, { ...product, quantity: 1 }];
        return { ...state, favorite: newFavorite };
      } else {
        console.log("already exist");
        return state;
      }

    case ActionTypes.REMOVE_FAVORITE:
      const { productId } = payload;
      const updatedFavorite = state.favorite.filter(
        (item) => item.id !== productId
      );
      return { ...state, favorite: updatedFavorite };
    default:
      return state;
  }
};

export const addCartReducer = (state = { cart: [] }, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_CART:
      const { product } = payload;
      const itemInCart = state.cart.find((item) => item.id === product.id);
      if (itemInCart) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        const newCart = [...state.cart, { ...product, quantity: 1 }];
        return { ...state, cart: newCart };
      }
    case ActionTypes.ADD_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case ActionTypes.REMOVE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.product.id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case ActionTypes.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== payload.productRemove.id
        ),
      };
    default:
      return state;
  }
};

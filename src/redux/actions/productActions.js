import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const setProductsMen = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS_MEN,
    payload: products,
  };
};
export const addFavorite = (product) => {
  return {
    type: ActionTypes.ADD_FAVORITE,
    payload: product,
  };
};
export const removeFavorite = (productId) => {
  return {
    type: ActionTypes.REMOVE_FAVORITE,
    payload: productId,
  };
};
export const addCart = (products) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: products,
  };
};

export const addCartQuantity = (product) => ({
  type: ActionTypes.ADD_CART_QUANTITY,
  payload: { product },
});

export const removeCartQuantity = (product) => ({
  type: ActionTypes.REMOVE_CART_QUANTITY,
  payload: { product },
});

export const removeCart = (productRemove) => ({
  type: ActionTypes.REMOVE_CART,
  payload: { productRemove },
});

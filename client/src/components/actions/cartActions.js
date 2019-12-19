import {
  ADD_TO_CART,
  ADD_QUANTITY,
  CLEAR_CART
} from "./action-types/cart-actions";

//add cart action
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
//clear cart action
export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

import {
  ADD_TO_CART,
  ADD_QUANTITY
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

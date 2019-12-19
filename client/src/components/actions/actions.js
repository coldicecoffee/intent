//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTAL = "GET_TOTAL";

//add cart action
export function addToCartSuccess(id) {
  return {
    type: ADD_TO_CART,
    id
  };
}
//add qt action
export function addQuantitySuccess(id) {
  return {
    type: ADD_QUANTITY,
    id
  };
}
//clear cart action success
export function clearCartSuccess() {
  return {
    type: CLEAR_CART
  };
}
//get total
export function getTotalSuccess(total) {
  return {
    type: GET_TOTAL,
    total: total
  };
}
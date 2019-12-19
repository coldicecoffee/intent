//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTAL = "GET_TOTAL";
export const GET_ITEMS = "GET_ITEMS";
export const GET_ADDED_ITEMS = "GET_ADDED_ITEMS";
export const GET_QUANTITY = "GET_QUANTITY";

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
//get all items
export function getItemsSuccess(items) {
  return {
    type: GET_ITEMS,
    items: items
  };
}
//get items in the cart
export function getAddedItemsSuccess(addedItems) {
  return {
    type: GET_ADDED_ITEMS,
    addedItems: addedItems
  };
}
//get the number of items in the cart
export function getQuantitySuccess(quantity) {
  return {
    type: GET_QUANTITY,
    quantity: quantity
  };
}
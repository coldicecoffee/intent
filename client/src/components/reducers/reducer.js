import {
  ADD_TO_CART,
  ADD_QUANTITY,
  CLEAR_CART,
  GET_TOTAL,
  GET_ITEMS,
  GET_ADDED_ITEMS,
  GET_QUANTITY
} from "../actions/actions";

const initState = {
  items: [],
  addedItems: [],
  quantity: 0,
  total: 0
};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state
      };
    case ADD_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1
      };
    case CLEAR_CART:
      state = initState;
      return {
        ...state,
        quantity: 0,
        total: 0
      };
    case GET_TOTAL:
      return {
        ...state,
        total: action.total
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.items
      };
    case GET_ADDED_ITEMS:
      return {
        ...state,
        addedItems: action.addedItems,
        quantity: action.addedItems.length
      };
    case GET_QUANTITY:
      return {
        ...state,
        quantity: action.quantity
      };
    default:
      return state;
  }
};

export default cartReducer;

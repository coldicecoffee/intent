import ItemA from "../../images/itemA.jpg";
import ItemB from "../../images/itemB.jpg";
import ItemC from "../../images/itemC.jpg";
import ItemD from "../../images/itemD.jpg";
import {
  ADD_TO_CART,
  ADD_QUANTITY
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: "A",
      title: "Apple",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 2.0,
      img: ItemA
    },
    {
      id: "B",
      title: "Banana",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 12.0,
      img: ItemB
    },
    {
      id: "C",
      title: "Cranberry",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 1.25,
      img: ItemC
    },
    {
      id: "D",
      title: "Durian",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 0.15,
      img: ItemD
    }
  ],
  addedItems: [],
  quantity: 0,
  serverResponse: "",
  total: 0
};
const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    // Call API
    fetch("http://localhost:8888/addItems/" + action.id)
      .then(res => res.text())
      .then(res => (state.serverResponse = res))
      .catch(err => err);

    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        quantity: state.quantity + 1,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        quantity: state.quantity + 1,
        total: newTotal
      };
    }
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      quantity: state.quantity + 1,
      total: newTotal
    };
  } else {
    return state;
  }
};

export default cartReducer;
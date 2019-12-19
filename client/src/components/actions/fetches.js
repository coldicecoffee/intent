import ItemA from "../../images/itemA.jpg";
import ItemB from "../../images/itemB.jpg";
import ItemC from "../../images/itemC.jpg";
import ItemD from "../../images/itemD.jpg";

import {
  addToCartSuccess,
  addQuantitySuccess,
  clearCartSuccess,
  getTotalSuccess,
  getItemsSuccess,
  getAddedItemsSuccess,
  getQuantitySuccess
} from "./actions";

export function addToCart(id) {
  return dispatch => {
    fetch("http://localhost:8888/addItems/" + id, {
      method: "POST"
    }).catch(err => err);
    dispatch(addToCartSuccess(id));
  };
}

export function addQuantity(id) {
  return dispatch => {
    dispatch(addQuantitySuccess(id));
  };
}

export function clearCart() {
  return dispatch => {
    fetch("http://localhost:8888/initCart").catch(err => err);
    dispatch(clearCartSuccess());
  };
}

export function getTotal() {
  return dispatch => {
    fetch("http://localhost:8888/retrieveTotal")
      .then(res => res.json())
      .then(res => {
        dispatch(getTotalSuccess(res.total));
      })
      .catch(err => err);
  };
}

export function getItems() {
  return dispatch => {
    fetch("http://localhost:8888/getItems")
      .then(res => res.json())
      .then(res => {
        let items = [];
        let resItems = res.items;
        for (let resItem of resItems) {
          switch (resItem.id) {
            case "A":
              resItem.img = ItemA;
              break;
            case "B":
              resItem.img = ItemB;
              break;
            case "C":
              resItem.img = ItemC;
              break;
            case "D":
              resItem.img = ItemD;
              break;
            default:
              break;
          }
          items.push(resItem);
        }
        dispatch(getItemsSuccess(items));
      })
      .catch(err => err);
  };
}

export function getAddedItems() {
  return dispatch => {
    fetch("http://localhost:8888/getAddedItems")
      .then(res => res.json())
      .then(res => {
        let items = [];
        let resItems = res.addedItems;
        for (let resItem of resItems) {
          switch (resItem.id) {
            case "A":
              resItem.img = ItemA;
              break;
            case "B":
              resItem.img = ItemB;
              break;
            case "C":
              resItem.img = ItemC;
              break;
            case "D":
              resItem.img = ItemD;
              break;
            default:
              break;
          }
          items.push(resItem);
        }
        dispatch(getAddedItemsSuccess(items));
      })
      .catch(err => err);
  };
}

export function getQuantity() {
  return dispatch => {
    fetch("http://localhost:8888/getQuantity")
      .then(res => res.json())
      .then(res => {
        console.log("QUAN? " + res.quantity);
        dispatch(getQuantitySuccess(res.quantity));
      })
      .catch(err => err);
  };
}

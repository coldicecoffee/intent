import {
  addToCartSuccess,
  addQuantitySuccess,
  clearCartSuccess,
  getTotalSuccess
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
    fetch("http://localhost:8888/addItems/" + id, {
      method: "POST"
    }).catch(err => err);
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
        return res.total;
      })
      .catch(err => err);
  };
}

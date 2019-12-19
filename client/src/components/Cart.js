import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addQuantity
} from "./actions/fetches";

import Total from "./Total";

class Cart extends Component {
  handleAddQuantity(id) {
    this.props.addQuantity(id);
  }
  
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: ${item.price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              {(item.id === "A" || item.id === "C")  && item.quantity >= 4 && (
                <p className="red-text">
                  <b>Volumn Discount Applied</b>
                </p>
              )}
              <button
                className="waves-effect waves-light btn blue add"
                onClick={() => {
                  this.handleAddQuantity(item.id);
                }}
              >
                Add one more
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Total />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addQuantity: id => {
      dispatch(addQuantity(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

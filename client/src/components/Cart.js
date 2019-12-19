import React, { Component } from "react";
import { connect } from "react-redux";
import { getAddedItems, getQuantity } from "./actions/fetches";

import Total from "./Total";

class Cart extends Component {
  componentDidMount() {
    this.props.getAddedItems();
    this.props.getQuantity();
  }

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} />
            </div>
            <div className="item-desc">
              <span className="title">{item.description}</span>
              <p>
                <b>Price: ${item.unit_price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              {(item.id === "A" || item.id === "C") && item.quantity >= 4 && (
                <p className="red-text">
                  <b>Volumn Discount Applied</b>
                </p>
              )}
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
    getAddedItems: () => {
      dispatch(getAddedItems());
    },
    getQuantity: () => {
      dispatch(getQuantity());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

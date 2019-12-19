import React, { Component } from "react";
import { connect } from "react-redux";
import { clearCart } from "./actions/cartActions";

class Total extends Component {
  handleClear = state => {
    this.props.clearCart();
  };

  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <b>Total: ${this.props.total}</b>
          </li>
          <li className="collection-item">
            <button
              className="waves-effect waves-light btn pink remove"
              onClick={() => {
                this.handleClear();
              }}
            >
              Remove All
            </button>
          </li>
        </div>
      </div>
    );
  }
}

const fetchTotal = state => {
  // Call API
  fetch("http://localhost:8888/retrieveTotal")
    .then(res => res.json())
    .then(res => (state.total = res.total))
    .catch(err => err);
};

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => {
      dispatch(clearCart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Total);

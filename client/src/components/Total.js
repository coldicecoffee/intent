import React, { Component } from "react";
import { connect } from "react-redux";
import { clearCart, getTotal } from "./actions/fetches";

class Total extends Component {
  handleClear() {
    this.props.clearCart();
  }

  componentDidMount() {
    this.props.getTotal();
  }

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
    },
    getTotal: () => {
      dispatch(getTotal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Total);

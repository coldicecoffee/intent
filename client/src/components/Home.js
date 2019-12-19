import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, addQuantity, getItems, getQuantity } from "./actions/fetches";

class Home extends Component {
  handleClick(id) {
    this.props.addToCart(id);
    this.props.addQuantity();
  }

  componentDidMount() {
    this.props.getItems();
    this.props.getQuantity();
  }

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.description} />
            <span className="card-title">{item.description}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>
          <div className="card-content">
            <p>
              <b>Price: ${item.unit_price}</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
    addQuantity: () => {
      dispatch(addQuantity());
    },
    getItems: () => {
      dispatch(getItems());
    },
    getQuantity: () => {
      dispatch(getQuantity());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

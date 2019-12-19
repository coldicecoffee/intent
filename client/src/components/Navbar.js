import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            Shopping
          </Link>
          <ul className="right">
            <li>
              <Link to="/cart" className="cart-link">
                <i className="material-icons">shopping_cart</i>
                {this.props.quantity > 0 && (
                  <span className="new badge">{this.props.quantity}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    quantity: state.quantity
  };
};

export default connect(mapStateToProps)(Navbar);

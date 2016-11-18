import React from 'react';

const CartCamera = React.createClass({
  // handleRemoveAllFromCart() {
  //   this.props.handleRemoveAllFromCart(this.props.cart)
  // },

  render() {
    return (
      // name, quantity, price
      <div className="row cart-camera-container">
        <div className="row">
          <div className="twelve columns">
            <p className="cart-title">{this.props.camera.title}</p>
          </div>
        </div>
        <div className="row cart-info">
          <div className="six columns">
            <p className="cart-quantity">Quantity:</p>
          </div>
          <div className="six columns">
            <p>{this.props.camera.qty}</p>
          </div>
        </div>
        <div className="row cart-info">
          <div className="six columns">
            <p className="cart-price">Price:</p>
          </div>
          <div className="six columns">
            <p>{this.props.camera.price}</p>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <button className="u-full-width remove-from-cart">Remove</button>
          </div>
        </div>
      </div>
    )
  }
});

export default CartCamera;

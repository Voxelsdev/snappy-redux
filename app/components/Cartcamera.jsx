import React from 'react';

const CartCamera = React.createClass({
  render() {
    return (
      // name, quantity, price
      <div className="row cart-camera-container">
        <div className="row">
          <div className="six columns">
            <p>Quantity</p>
          </div>
          <div className="six columns">
            <p>{this.props.camera.quantity}</p>
          </div>
        </div>
        <div>
          <p>
            Camera.price
          </p>
        </div>
        <div>
          <p>
            Camera.name
          </p>
        </div>
      </div>
    )
  }
});

export default CartCamera;

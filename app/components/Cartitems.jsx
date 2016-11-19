import React from 'react';
import CartCamera from './Cartcamera'

const CartItems = React.createClass({
  render() {
    const cameras = this.props.cart.map((camera, index) => {
      return <CartCamera
                camera={camera}
                key={index}
                handleDelete={this.props.handleDelete}
              />
    });

    return (
      <div>{ cameras }</div>
    )
  }
});

export default CartItems;

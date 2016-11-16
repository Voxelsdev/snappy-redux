import React from 'react';
import CartCamera from './Cartcamera'

const CartItems = React.createClass({
  render() {
    const temparr = [1,2,3];
    const cameras = temparr.map(camera => {
      return <CartCamera />
    });

    return (
      <div>{ cameras }</div>
    )
  }
});

export default CartItems;

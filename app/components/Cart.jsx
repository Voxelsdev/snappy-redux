import React from 'react';
import CartItems from './Cartitems';

const Cart = React.createClass({
  render() {
    return (
      <div>
        <CartItems
        cart={this.props.cart}/>
        <div>
          <p>
            Subtotal: subtotal here
          </p>
        </div>
        <div>
          <p>
            Tax: tax here
          </p>
        </div>
        <div>
          <p>
            Total: total here
          </p>
        </div>
      </div>
    )
  }
});

export default Cart;

import React from 'react';
import CartItems from './Cartitems';

const Cart = React.createClass({
  render() {
    return (
      <div>
        <CartItems cart={this.props.cart}/>
        <div>
          <p>
            Subtotal: {this.props.costs.subtotal}
          </p>
        </div>
        <div>
          <p>
            Tax: {this.props.costs.tax}
          </p>
        </div>
        <div>
          <p>
            Total: {this.props.costs.total}
          </p>
        </div>
      </div>
    )
  }
});

export default Cart;

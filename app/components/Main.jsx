import React from 'react';
import Catalog from './Catalog';
import Cart from './Cart';

const Main = React.createClass({
  render() {
    return (
      <main>
        <div className="row">
          <div className="eight columns">
            <Catalog
              cameras={this.props.cameras}
              addToCart={this.props.addToCart}
            />
          </div>
          <div className="two columns">
            <Cart
              cart={this.props.cart}
            />
          </div>
        </div>
      </main>
    )
  }
});

export default Main;

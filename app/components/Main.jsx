import React from 'react';
import Catalog from './Catalog';
import Cart from './Cart';

const Main = React.createClass({
  render() {
    return (
      <main>
        <div className="row">
          <div className="eight columns">
            <Catalog />
          </div>
          <div className="two columns">
            <Cart />
          </div>
        </div>
      </main>
    )
  }
});

export default Main;

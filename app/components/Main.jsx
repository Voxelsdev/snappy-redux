import React from 'react';
import Catalog from './Catalog';
import Cart from './Cart';

const Main = React.createClass({
  render() {
    return (
      <main>
        <div className="row">
          <div className="col s8">
            <Catalog />
          </div>
          <div className="col s2">
            <Cart />
          </div>
        </div>
      </main>
    )
  }
});

export default Main;

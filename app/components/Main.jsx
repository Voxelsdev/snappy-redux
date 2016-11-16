import React from 'react';
import Catalog from './Catalog';
import Cart from './Cart';

const Main = React.createClass({
  render() {
    return (
      <main>
        <Catalog />
        <Cart />
      </main>
    )
  }
});

export default Main;

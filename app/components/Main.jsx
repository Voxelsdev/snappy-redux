import React from 'react';
import Catalog from './Catalog';
import Cart from './Cart';

const Main = React.createClass({
  getInitialState() {
    return {
      cart: [],
      cameras: [{
        id: 1,
        title: 'Nikon D3100 DSLR',
        image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
        rating: 4,
        price: 369.99,
        onSale: true
      }, {
        id: 2,
        title: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2,
        price: 1099.0,
        onSale: false
      }, {
        id: 3,
        title: 'Nikon D810A',
        image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        onSale: true
      }],
    }
  },

  addToCart (camera) {
    let cart;
    let cameraMatch;
    let cartCamera;

    const cartSubMatch = this.state.cart.filter(e => {
      if (e.id !== camera.id) {
        return true;
      }

      cameraMatch = e;
    });

    if (cameraMatch) {
      cartCamera = Object.assign({}, cameraMatch, { qty: ++cameraMatch.qty });
    } else {
      cartCamera = Object.assign({}, camera, { qty: 1 });
    }

    cart = cartSubMatch.concat(cartCamera);
    this.setState({ cart });
  },

  handleCost() {
    let subtotal = 0;

    for (const camera of this.state.cart) {
      subtotal += camera.price * camera.qty;
    }

    return {
      subtotal: (subtotal).toFixed(2),
      tax: (subtotal / 10).toFixed(2),
      total: (subtotal + (subtotal / 10)).toFixed(2),
    };
  },

  render() {
    const { subtotal, tax, total } = this.handleCost();
    const costs = { subtotal, tax, total };

    return (
      <main>
        <div className="row">
          <div className="eight columns">
            <Catalog
              cameras={this.state.cameras}
              addToCart={this.addToCart}
              handleCost={this.handleCost}
            />
          </div>
          <div className="three columns cart">
            <Cart
              cart={this.state.cart}
              costs={costs}
            />
          </div>
        </div>
      </main>
    )
  }
});

export default Main;

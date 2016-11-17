import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const App = React.createClass({
  getInitialState() {
    return {
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

      cart: [],
    }
  },

  addToCart (camera) {
    if (this.state.cart.indexOf(camera) >= 0) {

    }
  },

  render() {
    return (
      <div>
        <Header />
        <Main
          cart={this.state.cart}
          addToCart={this.addToCart}
          cameras={this.state.cameras}
        />
        <Footer />
      </div>
    )
  }
});

export default App;

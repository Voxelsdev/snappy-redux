import React from 'react';

const Navbar = React.createClass({
  render() {
    return (
      <div id="navbar" className="row">
        <div className="two columns">
          <p>Home</p>
        </div>
        <div className="two columns">
          <p>Checkout</p>
        </div>
      </div>
    )
  }
});

export default Navbar;

import React from 'react';

const Navbar = React.createClass({
  render() {
    return (
      <div id="navbar" className="row">
        <div className="two columns nav-col">
          <a className="button u-full-width" href="">Home</a>
        </div>
        <div className="two columns nav-col">
          <a className="button u-full-width" href="">Checkout</a>
        </div>
      </div>
    )
  }
});

export default Navbar;

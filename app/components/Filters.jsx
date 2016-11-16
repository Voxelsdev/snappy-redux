import React from 'react';

const Filters = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="eight columns">
          <input
            type="text"
            className="u-full-width"
            placeholder="name of product"
          />
        </div>
        <div className="two columns">
          <select>
            <option>Name</option>
            <option>Price: High to Low</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>
    )
  }
});

export default Filters;

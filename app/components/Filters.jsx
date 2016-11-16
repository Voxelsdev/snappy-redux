import React from 'react';

const Filters = React.createClass({
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="name of product"
        />
        <select>
          <option>Name</option>
          <option>Price: High to Low</option>
          <option>Price: Low to High</option>
        </select>
      </div>
    )
  }
});

export default Filters;

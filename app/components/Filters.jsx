import React from 'react';

const Filters = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s8">
          <input
            type="text"
            placeholder="name of product"
          />
        </div>
        <div className="col s2">
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

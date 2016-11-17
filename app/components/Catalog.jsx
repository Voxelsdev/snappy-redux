import React from 'react';
import Filters from './Filters';
import CameraList from './Cameralist';

const Catalog = React.createClass({
  render() {
    return (
      <div>
        <Filters />
        <CameraList
          addToCart={this.props.addToCart}
          cameras={this.props.cameras}
        />
      </div>
    )
  }
});

export default Catalog;

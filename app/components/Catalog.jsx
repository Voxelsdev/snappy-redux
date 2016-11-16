import React from 'react';
import Filters from './Filters';
import CameraList from './Cameralist';

const Catalog = React.createClass({
  render() {
    return (
      <div>
        <Filters />
        <CameraList />
      </div>
    )
  }
});

export default Catalog;

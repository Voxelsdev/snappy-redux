import React from 'react';
import Camera from './Camera';

const CameraList = React.createClass({
  render() {
    const camerasList = this.props.cameras.map((camera, index) =>
    <Camera
      addToCart={this.props.addToCart}
      camera={camera}
      key={index}
    />);

    return (
      <div>{camerasList}</div>
    )
  }
});

export default CameraList;

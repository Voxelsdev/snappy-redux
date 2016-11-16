import React from 'react';
import Camera from './Camera';

const CameraList = React.createClass({
  render() {
    const temparr = [1,2,3];
    const camerasList = temparr.map(camera => <Camera />);

    return (
      <div>{camerasList}</div>
    )
  }
});

export default CameraList;

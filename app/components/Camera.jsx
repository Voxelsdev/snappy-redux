import React from 'react';

const Camera = React.createClass({
  render() {
    return(
      <div>
        <div>Camera.image</div>
        <div>
          <p>Camera.name</p>
        </div>
        <div>
          <p>Camera.rating</p>
        </div>
        <div>
          <p>Camera.price</p>
        </div>
      </div>
    )
  }
});

export default Camera;

import React from 'react';

const Camera = React.createClass({
  handleClick() {
    this.props.addToCart(this.props.camera);
    this.props.handleCost();
  },

  render() {
    const blah = 'https://reviewed-production.s3.amazonaws.com/1423818102000/NIKON-D810A-HERO.jpg';
    return(
      <div className="row catalog-image" style={{ backgroundImage: 'url(' + blah + ')', }}>
        <div className="five columns">
          <div className="row">
            <div className="catalog-name twelve columns">
              <p>{this.props.camera.title}</p>
            </div>
          </div>

          <div className="row">
            <div className="catalog-rating-price twelve columns">
              <div className="catalog-rating six columns">
                <p>Camera.rating: {this.props.camera.rating}</p>
              </div>

              <div className="catalog-price six columns">
                <p>Camera.price: ${this.props.camera.price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="three columns offset-by-four">
          <button
            onClick={this.handleClick}
            className='u-full-width add-to-cart'>
            Add To Cart
          </button>
        </div>
      </div>
    )
  }
});

export default Camera;

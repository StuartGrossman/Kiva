/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Image from 'react-graceful-image';
import Carousel1 from '../../images/Carousel3-1.jpg';
import Carousel2 from '../../images/Carousel3-2.jpg';
import Carousel3 from '../../images/Carousel3-3.jpg';

class FellowShipSlider extends Component {
  render() {
    return (
      <div>
        <div
          id="fellowShipSlider"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#fellowShipSlider"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#fellowShipSlider" data-slide-to="1" />
            <li data-target="#fellowShipSlider" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                className="d-block w-100"
                src={Carousel1}
                alt="My awesome image"
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block w-100"
                src={Carousel2}
                alt="My awesome image"
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block w-100"
                src={Carousel3}
                alt="My awesome image"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#fellowShipSlider"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon carousel-icon-dems"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#fellowShipSlider"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon carousel-icon-dems"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default FellowShipSlider;

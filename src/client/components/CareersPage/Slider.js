/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Image from 'react-graceful-image';
import Carousel1 from '../../images/Carousel1.jpg';
import Carousel2 from '../../images/Carousel2.jpg';
import Carousel3 from '../../images/Carousel3.jpg';
import SmallCarousel1 from '../../images/SmallCarousel1.jpg';
import SmallCarousel2 from '../../images/SmallCarousel2.jpg';
import SmallCarousel3 from '../../images/SmallCarousel3.jpg';


class Slider extends Component {
  constructor() {
    super();
  }

  state = {};

  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner Carousel-Hight">
          <div className="carousel-item active">
            <Image
              className="w-100 largeScreenImage"
              src={Carousel1}
              alt="My awesome image"
            />
            <Image
              className="w-100 smallScreenImage"
              src={SmallCarousel1}
              alt="My awesome image"
            />
            {/* <img className="d-block w-100" src={this.props.img1} alt="First slide" /> */}
          </div>
          <div className="carousel-item">
            <Image
              className="largeScreenImage w-100"
              src={Carousel2}
              alt="Second slide"
            />
            <Image
              className="smallScreenImage w-100"
              src={SmallCarousel2}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="largeScreenImage w-100"
              src={Carousel3}
              alt="Third slide"
            />
            <Image
              className="smallScreenImage w-100"
              src={SmallCarousel3}
              alt="Second slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
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
          href="#carouselExampleIndicators"
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
    );
  }
}

export default Slider;

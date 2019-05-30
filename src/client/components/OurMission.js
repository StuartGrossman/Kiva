/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import SliderImage from "../images/image1.svg";
import Carousel1 from "../images/Carousel2-1.jpeg";

class OurMission extends Component {
  render() {
    return (
      <div className="grayBackground">
        <div className="container-fluid grayBackground">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                <h1 style={{marginTop: '60px'}} className="missionTitle">See our mission in action.</h1>
                <p className="Mission-Statement" style={{marginBottom: '60px'}} >
                  Everyone at Kiva gets to travel to one of the countries we
                  work in. There, you’ll meet borrow-ers, tour our finance
                  partner operations, and explore the city like a local. Think
                  of it as a jumpstart to your inspiration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleIndicators2"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators2"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators2" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators2" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={Carousel1}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={SliderImage}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={SliderImage}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container-fluid grayBackground">
          <div className="container">
            <div className="row" >
              <div className="col-md-12 col-lg-12 col-sm-12 col-12" style={{ marginTop: '60px', marginBottom: '60px'}}>
                <p className="kivaImpacts" style={{ marginBottom: '10px' }}>
                  “Kiva’s impact and meeting the people who make it happen
                  helped me connect my own contributions at Kiva to the
                  opportunity we create in the world.”
                </p>
                <p className="kivaImpactsQuote">Philip Minnitte, Senior Manager, People & Culture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurMission;

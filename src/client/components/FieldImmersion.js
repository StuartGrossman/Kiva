/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import SliderImage from '../images/image1.svg';

class FieldImmersion extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <h3 className="smallMarginBottom">FIELD IMMERSION TRIP</h3>
              <p className="compressedLineHeight">
                All new hires get to visit one of the 80+ countries we work in.
                You’ll meet borrowers and see just how much a $25 loan can
                impact people’s lives. Oh, and you’ll get a chance to relax and
                explore, too.
              </p>
              <br />
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 smallMarginBottom">
                  <img className="img-fluid" src={SliderImage} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 smallMarginBottom">
                  <img className="img-fluid" src={SliderImage} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 smallMarginBottom">
                  <img className="img-fluid" src={SliderImage} />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 ">
                  <h4 className="compressedLineHeight">
                    Everyone at Kiva gets to travel to one of the countries we
                    work in. There, you’ll meet borrowers, tour Microfinance
                    Institutions, and explore the city like a local. Think of it
                    as a jumpstart to your inspiration.
                  </h4>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FieldImmersion;

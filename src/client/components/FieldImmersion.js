/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import SliderImage from '../images/image1.svg';

class FieldImmersion extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 " />
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 ">
          <h1>FIELD IMMERSION TRIP</h1>
          <p className="compressedLineHeight">
            block of text...block of text...block of text...block of
            text...block of text...block of text...block of text...block of
            text...block of text...block of text...block of text...block of
            text...block of text...block of text...block of text...block of
            text...block of text...block of text...block of text...block of
            text...block of text...
          </p>

          <br />

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <img className="imageBlockProportions" src={SliderImage} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <img className="imageBlockProportions" src={SliderImage} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <img className="imageBlockProportions" src={SliderImage} />
            </div>
          </div>

          <br />


          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ">
              <h4>
                "block of text...block of text...block of text...block of
                text...block of text...block of text...block of text... "
              </h4>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
          </div>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
      </div>
    );
  }
}

export default FieldImmersion;

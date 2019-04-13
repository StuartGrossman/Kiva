import React, { Component } from 'react';
import SliderImage from '../images/image1.svg';

// eslint-disable-next-line react/prefer-stateless-function
class KivaAffects extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className="col-lg-2 col-md-1 col-sm-1 col-xs-1" />
        <div className="col-lg-9 col-md-10 col-sm-10 col-xs-10 ">
          <h3>COOL THINGS & HOW WER'RE AFFECTING</h3>
          <br />

          <div margin-top="15px;">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <img alt="placeHolderImage" className="imageBlockProportions" src={SliderImage} />
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <p className="block-text compressedLineHeight smallMarginTop">
                  block of text...block of text...block of text...block of
                  text...block of text...block of text...block of text...block
                  of text...block of text...block of text...block of
                  text...block of text...block of text...block of text...block
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <p className="block-text compressedLineHeight smallMarginTop">
                  block of text...block of text...block of text...block of
                  text...block of text...block of text...block of text...block
                  of text...block of text...block of text...block of
                  text...block of text...block of text...block of text...block
                </p>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <img alt="placeHolderImage" className="imageBlockProportions" src={SliderImage} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1 col-xs-1" />
      </div>
    );
  }
}

export default KivaAffects;

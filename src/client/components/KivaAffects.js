import React, { Component } from 'react';
import SliderImage from '../images/image1.svg';

// eslint-disable-next-line react/prefer-stateless-function
class KivaAffects extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <h3>COOL THINGS & HOW WER'RE AFFECTING</h3>
              <br />

              <div margin-top="15px;">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <img
                      alt="placeHolderImage"
                      className="imageBlockProportions"
                      src={SliderImage}
                    />
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <p className="block-text smallMarginTop">
                      block of text...block of text...block of text...block of
                      text...block of text...block of text...block of
                      text...block of text...block of text...block of
                     
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <p className="block-text smallMarginTop">
                      block of text...block of text...block of text...block of
                      text...block of text...block of text...block of
                      text...block of text...block of text...block of
                
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <img
                      alt="placeHolderImage"
                      className="imageBlockProportions"
                      src={SliderImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KivaAffects;

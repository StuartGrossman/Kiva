import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class KivaAffects extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 " />
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 ">
            <h1>COOL THINGS/HOW WER'RE AFFECTING</h1>
            <br />

            <div margin-top="15px;">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <img className="imageBlockProportions" src="../src/client/images/image1.svg" />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 " />
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 ">
                  <p className="block-text compressedLineHeight">
                    block of text...block of text...block of text...block of
                    text...block of text...block of text...block of text...block
                    of text...block of text...block of text...block of
                    text...block of text...block of text...block of text...block
                    of text...block of text...block of text...block of
                    text...block of text...block of text...block of text...
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <p className="block-text compressedLineHeight">
                    block of text...block of text...block of text...block of
                    text...block of text...block of text...block of text...block
                    of text...block of text...block of text...block of
                    text...block of text...block of text...block of text...block
                    of text...block of text...block of text...block of
                    text...block of text...block of text...block of text...
                  </p>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <img className="imageBlockProportions" src="../src/client/images/image1.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
        </div>
    );
  }
}

export default KivaAffects;

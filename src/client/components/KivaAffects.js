import React, { Component } from 'react';
import image1 from '../images/big-ideas-1.jpeg';
import image2 from '../images/big-ideas-2.jpeg';

// eslint-disable-next-line react/prefer-stateless-function
class KivaAffects extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: '#f6f6f6' }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <h1 className="Big-ideas-big-impac" style={{ marginTop: '100px' }}>Big ideas, big impact.</h1>
              <h4 className="We-make-a-difference">We make a difference in real people’s lives. And we do it everyday. Here’s a snapshot of what we’re working on:</h4>
              <br />

              <div margin-top="15px;">
                <div className="row" style={{ marginBottom: '100px' }}>
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <img
                      alt="placeHolderImage"
                      className="image001"
                      src={image1}
                    />
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <h3 className="Big-Ideas-Small-Title-Text">Building Bright Futures</h3>

                    <p className="block-text smallMarginTop">
                      $25 can go a long way. From
                      farmers to students to women-owned businesses, we
                      crowdfund millions of dollars in loans each week to help
                      people change their lives.
                    </p>
                  </div>
                </div>

                <div className="row" style={{ marginBottom: '100px' }}>
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <h3 className="Big-Ideas-Small-Title-Text">Building Financial Infrastructure</h3>

                    <p className="block-text smallMarginTop">
                      Blockchain isn’t just
                      for cryptocurrency. We’re using it in Sierra Leone to help
                      unbanked people get access to financial services. Our work
                      is already serving as a model for other countries.
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <img
                      alt="placeHolderImage"
                      className="image002"
                      src={image2}
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

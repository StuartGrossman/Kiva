import React, { Component } from "react";
import image1 from "../images/big-ideas-1.jpeg";
import image2 from "../images/big-ideas-2.jpeg";

// eslint-disable-next-line react/prefer-stateless-function
class Impacts extends Component {
  render() {
    return (
      <div className="grayBackground">
        <br />
        <br />
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1 className="Big-ideas-big-impac">Big ideas, big impact.</h1>
                <h4 className="We-make-a-difference ">
                  We make a difference in real people’s lives. And we do it
                  everyday. Here’s a snapshot of what we’re working on:
                </h4>
                <br />
              </div>
            </div>

            <div margin-top="15px;">
              <div className="row ImpactClassRight">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                  <img
                    alt="placeHolderImage"
                    className="Impact-Images"
                    src={image1}
                  />
                </div>
                <div className="Impacts-Middle-Col" />
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 Margin-Auto">
                  <h3 className="Big-Ideas-Small-Title-Text  smallMargin">
                    Building Financial Infrastructure
                  </h3>

                  <p className="Impact-Small-Text Impacts-Right-Text-Col">
                    $25 can go a long way. From farmers to students to
                    women-owned businesses, we crowdfund millions of dollars in
                    loans each week to help people change their lives.

                
                  </p>
                </div>
              </div>

              <div className="row ImpactClassLeft MarginTopClass">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 Margin-Auto">
                  <h3 className="Big-Ideas-Small-Title-Text">
                    Building Bright Futures
                  </h3>

                  <p className="Impact-Small-Text">
                    $25 can go a long way. From farmers to students to
                    women-owned businesses, we crowdfund millions of dollars in
                    loans each week to help people change their lives.
                  </p>
                </div>
                <div className="" />
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                  <img
                    alt="placeHolderImage"
                    className="Impact-Images"
                    src={image2}
                  />
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Impacts;

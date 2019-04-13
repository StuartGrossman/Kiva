import React, { Component } from 'react';
import IndividualAbroad from './IndividualAbroad';

// eslint-disable-next-line react/prefer-stateless-function
class Abroad extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <h1>BENEFITS</h1>
          <br />
          {/* <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 smallMarginTop" />
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 smallMarginTop" />
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mediumMarginTop">
              <span>Domestic</span>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mediumMarginTop">
              <span>International</span>
            </div>
          </div> */}
          <IndividualAbroad color="#e9e9e9" />
          <IndividualAbroad color="white" />
          <IndividualAbroad color="#e9e9e9" />
          <IndividualAbroad color="white" />
          <IndividualAbroad color="#e9e9e9" />

        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
      </div>
    );
  }
}

export default Abroad;

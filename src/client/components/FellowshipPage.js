/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FellowShipSlider from './FellowShipSlider';
import MakeADiffernce from './MakeADiffernce';
import Fellows from './Fellows';
import Places from './Places';
class FellowshipPage extends Component {
  render() {
    return (
      <div className={this.props.showPage ? 'hidden' : ''}>
        <React.Fragment>
          <FellowShipSlider />
          <MakeADiffernce />
          <Fellows />
          <Places />
          {/* <br />
          <FellowshipProgram />
          <br />
          <WhatWillIDo />
          <br />
          <DomesticInternational />
          <br />
          <Location /> */}
        </React.Fragment>
      </div>
    );
  }
}

export default FellowshipPage;

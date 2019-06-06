/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FellowShipSlider from './FellowShipSlider';
import MakeADifference from './MakeADifference';
import Fellows from './Fellows';
import Places from './Places';
import OfficeType from './OfficeType';
import FAQ from './FAQ';

class FellowshipPage extends Component {
  render() {
    return (
      <div className={this.props.showPage ? 'hidden' : ''}>
        <React.Fragment>
          <FellowShipSlider />
          <MakeADifference />
          <Fellows />
          <Places />
          <OfficeType />
          <FAQ />
        </React.Fragment>
      </div>
    );
  }
}

export default FellowshipPage;

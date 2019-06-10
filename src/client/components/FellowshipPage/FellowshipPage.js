/* eslint-disable lines-between-class-members */
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
  componentDidMount() {
    document.title = 'Kiva | Fellowship';
  }
  render() {
    return (
      <div>
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

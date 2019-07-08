/* eslint-disable lines-between-class-members */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FellowShipSlider from './FellowShipSlider';
import MakeADifference from './MakeADifference';
import Places from './Places';
import OfficeType from './OfficeType';
import FAQHolder from './FAQHolder';

class FellowshipPage extends Component {
  componentDidMount() {
    document.title = 'Kiva | Fellowships';
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <FellowShipSlider />
          <MakeADifference />
          <Places />
          <OfficeType />
          <FAQHolder />
        </React.Fragment>
      </div>
    );
  }
}

export default FellowshipPage;

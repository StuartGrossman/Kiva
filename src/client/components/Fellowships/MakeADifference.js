/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FellowJpg from '../../images/Fellow.jpg';

class MakeADifference extends Component {
  render() {
    return (
      <div className="container-fluid FirstMarginTop">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="Change-the-world-Do">Get out there.</h1>
              <h1 className="Change-the-world-Do">Make a difference.</h1>
              <p className="Kiva-fellows-are-bas">
                Kiva fellows bring our mission to life by working in the field with our international partners and in our regional offices. For 6-12 months, you'll build capacity, measure impact, and learn a ton about microfinance and social enterprise. Interested? Keep reading.
              </p>
              <div>
                <img src={FellowJpg} className="img-fluid fellowsImage" style={{ marginTop: '69px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MakeADifference;

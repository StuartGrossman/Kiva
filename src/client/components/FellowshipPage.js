/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FellowshipProgram from './FellowShipProgram';
import DomesticInternational from './DomesticInternational';
import WhatWillIDo from './WhatIWillDo';
import Location from './Location';

class FellowshipPage extends Component {
  render() {
    return (
      <div className={this.props.showPage ? 'hidden' : ''}>
        <React.Fragment>
          <div className="container-fluid">
            {/* <div className="container"> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <br />
                <h2>Coming Soon!</h2>
                <br />
                <br />
              </div>
            </div>
            {/* </div> */}
          </div>

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

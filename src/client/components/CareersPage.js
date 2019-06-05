/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import WhatIsKiva from './WhatIsKiva';
import Video from './Video';
import JobPostings from './JobPostings';
import Impacts from './Impacts';
import Location from './Location';
import Benefits from './Benefits';
import OurMission from './OurMission';

class CareersPage extends Component {
  render() {
    return (
      <div className={this.props.showPage ? 'hidden' : ''}>
        <React.Fragment>
          <WhatIsKiva />
          <br />
          <Video />
          <br />
          <br />
          <br />
          <br />
          <Impacts />
          <JobPostings />
          <br />
          <OurMission />
          <br />
          <Benefits />
          <br />
          <Location />
        </React.Fragment>
      </div>
    );
  }
}

export default CareersPage;
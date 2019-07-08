/* eslint-disable lines-between-class-members */
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
import Slider from './Slider';

class CareersPage extends Component {
  componentDidMount() {
    document.title = 'Kiva | Careers';
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <Slider />
          <WhatIsKiva />
          <Video />
          <Impacts />
          <JobPostings />
          <OurMission />
          <Benefits />
          <Location />
        </React.Fragment>
      </div>
    );
  }
}

export default CareersPage;

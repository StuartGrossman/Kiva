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
import Carousel1 from '../images/Carousel1.jpg';
import Carousel2 from '../images/Carousel2.jpg';
import Carousel3 from '../images/Carousel3.jpg';

class CareersPage extends Component {
  render() {
    return (
      <div className={this.props.showPage ? 'hidden' : ''}>
        <React.Fragment>
          <Slider img1={Carousel1} img2={Carousel2} img3={Carousel3} />
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

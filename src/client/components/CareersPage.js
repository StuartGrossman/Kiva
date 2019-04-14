/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import WhatIsKiva from './WhatIsKiva';
import Video from './Video';
import JobPostings from './JobPostings';
import KivaAffects from './KivaAffects';
import FieldImmersion from './FieldImmersion';
import Location from './Location';
import Benefits from './Benefits';

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
          <KivaAffects />
          <br />
          <JobPostings />
          <br />
          <FieldImmersion />
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

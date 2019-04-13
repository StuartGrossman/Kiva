import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.css';
import Slider from './components/Slider';
import NavBar from './components/NavBar';
import WhatIsKiva from './components/WhatIsKiva';
import Video from './components/Video';
import JobPostings from './components/JobPostings';
import KivaAffects from './components/KivaAffects';
import FieldImmersion from './components/FieldImmersion';
import Location from './components/Location';
import Abroad from './components/Abroad';


class App extends Component {
  state = { };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Slider />
        <br />

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
        <Abroad />
        <br />
        <Location />
      </React.Fragment>
    );
  }
}
export default App;

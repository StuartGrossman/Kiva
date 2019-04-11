import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.css';
import Slider from './components/Slider';
import NavBar from './components/NavBar';
import WhatIsKiva from './components/WhatIsKiva';
import Video from './components/Video';
import JobPostings from './components/JobPostings';
import KivaAffects from './components/KivaAffects';
class App extends Component {
  state = {  };

  componentDidMount() {

  }

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
      </React.Fragment>
    );
  }
}
export default App;
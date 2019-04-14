/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.css';
import Slider from './components/Slider';
import NavBar from './components/NavBar';
import CareersPage from './components/CareersPage';
import Footer from './components/Footer';
import FellowshipPage from './components/FellowshipPage';

class App extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = { showCareersPage: false, showFellowshipPage: true };

  render() {
    return (
      <React.Fragment>
        <NavBar showCareersPage={this.state.showCareersPage} showFellowshipPage={this.state.showFellowshipPage} />
        <Slider />
        <br />
        <br />
        <FellowshipPage showPage={this.state.showFellowshipPage} />
        <CareersPage showPage={this.state.showCareersPage} />

        <Footer />
      </React.Fragment>
    );
  }
}
export default App;

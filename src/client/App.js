/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.css';
import './css/animated.css';
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
        <NavBar changeToCareersPage={() => this.setState({ showCareersPage: false, showFellowshipPage: true })} changeToFellowshipPage={() => this.setState({ showCareersPage: true, showFellowshipPage: false })} />
        <Slider />
        <br />
        <br />
        <FellowshipPage showPage={this.state.showFellowshipPage} />
        <CareersPage className="animated fadeIn" showPage={this.state.showCareersPage} />

        <Footer />
      </React.Fragment>
    );
  }
}
export default App;

/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.css';
import './css/animated.css';
import './css/custom.css';
import Slider from './components/Slider';
import NavBar from './components/NavBar';
import CareersPage from './components/CareersPage';
import Footer from './components/Footer';
import FellowshipPage from './components/FellowshipPage';
import SliderImage from './images/image1.svg';
import Carousel1 from './images/Carousel1.jpg';
// import sliderImage1 from './images/Carousel1.jpg';

class App extends Component {
  state = { showCareersPage: false, showFellowshipPage: true };

  render() {
    return (
      <React.Fragment>
        <NavBar changeToCareersPage={() => this.setState({ showCareersPage: false, showFellowshipPage: true })} changeToFellowshipPage={() => this.setState({ showCareersPage: true, showFellowshipPage: false })} />
        <Slider img1={Carousel1} img2={SliderImage} img3={SliderImage} />
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

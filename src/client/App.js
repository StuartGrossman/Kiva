import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.css';
import { Helmet } from 'react-helmet';
import Slider from './components/Slider';
import NavBar from './components/NavBar';
import WhatIsKiva from './components/WhatIsKiva';
import Video from './components/Video';
import JobPostings from './components/JobPostings';
import KivaAffects from './components/KivaAffects';
import FieldImmersion from './components/FieldImmersion';
import Location from './components/Location';


class App extends Component {
  state = {  };

  // componentDidMount() {
  //   this.initMap() {
  //     let uluru = { lat: -25.344, lng: 131.036 };
  //     let map = new google.maps.Map(
  //         document.getElementById('map'), { zoom: 4, center: uluru });
  //     let marker = new google.maps.Marker({ position: uluru, map: map });
  // }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkLcK1SfE1LKnS4Q3SvASYhtV67Avlp7M&callback=initMap" />
        </Helmet>
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
        <Location />
      </React.Fragment>
    );
  }
}
export default App;
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Location extends Component {
  componentDidMount() {
    let map = new google.maps.Map(
      document.getElementById('map'), { zoom: 4 });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 ">
          <h1>LOCATIONS</h1>
          <div id="map" className="map" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
      </div>
    );
  }
}

export default Location;

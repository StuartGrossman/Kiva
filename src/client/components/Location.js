/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';

class Location extends Component {

  render() {
    return (
      <div className="row container-fluid">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 ">
          <h1>LOCATIONS</h1>
          <br />
          <GoogleMaps />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
      </div>
    );
  }
}

export default Location;

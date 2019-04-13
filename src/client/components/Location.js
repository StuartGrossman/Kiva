/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';

class Location extends Component {

  render() {
    return (
      <div className="row ">
        {/* <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" /> */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
          <br />
          <GoogleMaps />
        </div>
        {/* <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" /> */}
      </div>
    );
  }
}

export default Location;

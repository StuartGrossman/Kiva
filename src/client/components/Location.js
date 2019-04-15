/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';

class Location extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <br />
              <GoogleMaps />
              <br />
              <p className="textAlignWebCenter">
                block of text...block of text...block of text...block of text...block of text...block of text...block of text...block of text...block of text...block of text...block of text...block of
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;

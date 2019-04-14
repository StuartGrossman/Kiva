/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="row grayBackground">
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="footer-text">PLACE HOLDER</div>
            <div className="footer-text">PLACE HOLDER</div>
            <div className="footer-text">PLACE HOLDER</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 " />
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
            <div className="footer-text">More</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

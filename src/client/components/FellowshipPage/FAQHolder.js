/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FAQ from './FAQ';

class FAQHolder extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: '100px', marginBottom: '171px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="New-Section-FPO-Titl">FAQ</h1>
              <hr />
              <FAQ />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQHolder;

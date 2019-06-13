/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Image from 'react-graceful-image';
import Places1 from '../../images/Places1.jpg';
import Places2 from '../../images/Places2.jpg';

class Places extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="New-Section-FPO-Titl">Oh the places you’ll go.</h1>
              <p className="Kiva-fellows-are-bas">
                Kiva fellows are based in 60+ countries throughout the
                developing world. That means there’s quite a bit of possibility
                when it comes to where you’ll be. We encourage you to apply
                wherever your skills and interests lie. Just keep in mind we
                might feel you’re a better fit elsewhere. We’ll talk through
                everything in the interview process though, so don’t worry.
              </p>
              <p className="Kiva-fellows-are-bas" style={{ marginTop: '30px' }}>
                Wherever you end up, you’ll get around quite a bit. You’ll have
                a “home base,” but fellows typically work with several field
                partners in multiple countries. It’s a chance to grow, and a
                chance to explore.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 smallMarginTop">
              <img src={Places1} className="img-fluid" style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 smallMarginTop">
              <img src={Places2} className="img-fluid" style={{ height: '100%', width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Places;

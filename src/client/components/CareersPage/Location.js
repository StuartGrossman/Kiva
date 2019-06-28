/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import GoogleMaps from './GoogleMaps';
import MyMapComponent from './MyMapComponent';
// eslint-disable-next-line no-unused-vars

class Location extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid grayBackground">
          <div className="container ">
            {/* <div className="container"> */}
            <div className="row">
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-12 "
                style={{ marginTop: '50px', marginBottom: '132px' }}
              >
                <h1 className="mapTitle">Global work. Global offices.</h1>
                <div>
                  <p className="We-hire">
                    We hire the best people we can find, wherever they happen to
                    be. That means some of our employees work remotely from
                    home, and others work in our offices around the world. We
                    currently have offices in: San Francisco, Portland, San
                    Jose, Chicago, New York, Nairobi (Kenya), and Bangkok
                    (Thailand).
                  </p>
                  <p className="We-hire" style={{ marginBottom: '60px' }}>
                    We’re growing fast, so we’ll be opening new offices soon.
                    Hopefully near you!
                  </p>
                </div>
                <br />
                {/* <GoogleMaps options={createMapOptions} />
               */}
                <MyMapComponent isMarkerShown={true} />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xl-1 col-lg-1 col-md-1 " />

              <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 ">
                <div>
                  <p className="Footer-Text">
                    Kiva is deeply committed to diversity, equity and inclusion
                    and we strive for our employees to reflect the diversity of
                    our global borrowers. We focus on reducing bias in all of
                    our people practices and policies including hiring, global
                    pay equity, development and resources.
                  </p>
                </div>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-1 " />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;

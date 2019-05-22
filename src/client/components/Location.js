/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';

// eslint-disable-next-line no-unused-vars
function createMapOptions(maps) {
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [
      {
        stylers: [
          {
            featureType: 'administrative',
            elementType: 'all',
            stylers: [
              {
                saturation: '-100'
              }
            ]
          },
          {
            featureType: 'administrative.province',
            elementType: 'all',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [
              {
                saturation: -100
              },
              {
                lightness: 65
              },
              {
                visibility: 'on'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [
              {
                saturation: -100
              },
              {
                lightness: '50'
              },
              {
                visibility: 'simplified'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [
              {
                saturation: '-100'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [
              {
                visibility: 'simplified'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'all',
            stylers: [
              {
                lightness: '30'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'all',
            stylers: [
              {
                lightness: '40'
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [
              {
                saturation: -100
              },
              {
                visibility: 'simplified'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                hue: '#ffff00'
              },
              {
                lightness: -25
              },
              {
                saturation: -97
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels',
            stylers: [
              {
                lightness: -25
              },
              {
                saturation: -100
              }
            ]
          }
        ]
      }
    ]
  };
}

class Location extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid grayBackground">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " style={{marginTop: '60px', marginBottom: '60px'}}>
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
                  <p className="We-hire">
                    We’re growing fast, so we’ll be opening new offices soon.
                    Hopefully near you!
                  </p>
                </div>
                <br />
                <GoogleMaps options={createMapOptions} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 " />

              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ">
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
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 " />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;

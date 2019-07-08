/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
// eslint-disable-next-line object-curly-newline
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// eslint-disable-next-line quote-props
const stylesArr = [
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
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      { visibility: 'off' }
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
];
const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAkLcK1SfE1LKnS4Q3SvASYhtV67Avlp7M&callback=initMap',
    loadingElement: <div className="mapDem" />,
    containerElement: <div className="mapDem" />,
    mapElement: <div className="mapDem" />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    defaultOptions={{ styles: stylesArr }}

  >
    <Marker position={{ lat: 37.338207, lng: -121.886330 }} name="San Jose" />
    <Marker position={{ lat: 41.878113, lng: -87.629799 }} />
    <Marker position={{ lat: 45.512230, lng: -122.658722 }} />
    <Marker position={{ lat: 13.756331, lng: 100.501762 }} />
    <Marker position={{ lat: -1.292066, lng: 36.821945 }} />
    <Marker position={{ lat: 40.712776, lng: -74.005974 }} />
    {props.isMarkerShown && <Marker position={{ lat: 37.7749, lng: -122.4194 }} />}
  </GoogleMap>);

export default MyMapComponent;

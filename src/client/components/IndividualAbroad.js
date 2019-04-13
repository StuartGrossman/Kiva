/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import CircleImage from '../images/circle.svg';

class IndividualAbroad extends Component {

  render() {
    return (
      <div className="row" style={{ 'backgroundColor': this.props.color, 'paddingTop': '5px', 'paddingBottom': '5px' }}>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
          <img className="rounded-circle img-fluid" alt="circleImage" src={CircleImage} />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <span>Benefit</span>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <span>
            block of text...block of text...block of text...block of
            block of text...
          </span>
        </div>
        {/* <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 lineHeight">
          <span>
            block of text...block of text...block of text...block of
            block of text...block of text...block of text...block of
            block of text...block of text...block of text...
          </span>
        </div> */}
      </div>
    );
  }
}

export default IndividualAbroad;

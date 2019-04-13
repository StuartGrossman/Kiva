/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import CircleImage from '../images/circle.svg';

class IndividualBenefits extends Component {

  render() {
    return (
      <div className="row" style={{ backgroundColor: this.props.color, paddingTop: '5px', paddingBottom: '5px' }}>
        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2">
          <img className="rounded-circle img-fluid mx-auto" alt="circleImage" src={CircleImage} />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3">
          <p style={{ lineHeight: '1.5' }}>{this.props.benefit}</p>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-7 col-xs-7">
          <p style={{ lineHeight: '1.5' }}>
            {this.props.detail}
          </p>
        </div>
      </div>
    );
  }
}

export default IndividualBenefits;

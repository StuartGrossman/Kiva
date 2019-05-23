/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import CircleImage from '../images/circle.svg';

class IndividualBenefits extends Component {
  render() {
    return (
      <div className="row Benefit-Dimensions" style={{ backgroundColor: this.props.color }}>
        <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6 Margin-Auto">
          <img className="Benefit-Icons Large-Screen-Icon" alt="circleImage" src={this.props.icon} />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Margin-Auto">
          <img className="Benefit-Icons Small-Screen-Icon Hide-Icon" alt="circleImage" src={this.props.icon} />
          <p className="Benefit-Title Small-Screen-Title">{this.props.benefit}</p>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 Margin-Auto">
          <p className="Benefit-Des">
            {this.props.detail}
          </p>
        </div>
      </div>
    );
  }
}

export default IndividualBenefits;

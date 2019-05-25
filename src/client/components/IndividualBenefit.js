/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import CircleImage from '../images/circle.svg';

class IndividualBenefits extends Component {
  render() {
    return (
      <div className="row Benefit-Dimensions" style={{ backgroundColor: this.props.color }}>
        <div className="col-lg-2 col-md-2 col-sm-6 col-6 Margin-Auto">
          <img className="Benefit-Icons Large-Screen-Icon" alt="circleImage" src={this.props.icon} />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-6 Margin-Auto ">
          <img className="Benefit-Icons Small-Screen-Icon Hide-Icon Small-Screen-Margin" alt="circleImage" src={this.props.icon} />
          <span className="Benefit-Title Small-Screen-Title">{this.props.benefit}</span>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-12 Margin-Auto">
          <span className="Benefit-Des">
            {this.props.detail}
          </span>
        </div>
      </div>
    );
  }
}

export default IndividualBenefits;

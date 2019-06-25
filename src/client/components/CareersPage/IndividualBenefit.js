/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import CircleImage from '../images/circle.svg';

class IndividualBenefits extends Component {
  render() {
    return (
      <div className="row Benefit-Dimensions " style={{ backgroundColor: this.props.color }}>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-2 Margin-Auto Iphone-Margin-Top">
          <img className={(this.props.customClass ? 'TimeOffIcon' : 'Benefit-Icons Large-Screen-Icon Icon-Margins Small-Screen-Icon')} alt="circleImage" src={this.props.icon} />
        </div>
        <div className={(this.props.customClass2 ? ' Benefit-Title col-xl-2 col-lg-2 col-md-2 col-sm-8 col-10  Margin-Auto ' : 'col-xl-2 col-lg-2 col-md-2 col-sm-8 col-8 Margin-Auto Iphone-Margin-Title-Top ')}>
          <span className="Benefit-Title Small-Screen-Title">{this.props.benefit}</span>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 Margin-Auto Iphone-Margin-Bottom">
          <span className="Benefit-Des ">
            {this.props.detail}
          </span>
        </div>
      </div>
    );
  }
}

export default IndividualBenefits;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
/* eslint-disable arrow-parens */
/* eslint-disable react/no-unknown-property */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import downArrow from '../images/down-arrow.svg';
import upArrow from '../images/up-arrow.svg';

class IndividualQA extends Component {
  renderIndividualQA = data => {
    // console.log(data);
    return data.map((item, index) => {
      return (
        <div key={index}>
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
              {item.Q}
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
              <a data-toggle="collapse" href={`#QA${index}`}>
                <img style={{ height: '30px' }} src={downArrow} />
              </a>
            </div>
          </div>
          <div className="row collapse" id={`QA${index}`}>
            <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
              {item.A}
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
              <a data-toggle="collapse" href={`#QA${index}`}>
                <img style={{ height: '30px' }} src={upArrow} />
              </a>
            </div>
          </div>
          <hr />
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderIndividualQA(this.props.data)}</div>;
  }
}

export default IndividualQA;

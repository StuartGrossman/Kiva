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
import React, { Component } from 'react';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line react/prefer-stateless-function
class IndividualPosting extends Component {
  renderIndividualJob = data => {
    // console.log(data);
    return data.map((item, index) => {
      return (
        <div key={index}>
          <div className="">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
                <span>
                  <a
                    href={item.absolute_url}
                    alt="job_link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.title}
                  </a>
                </span>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
                <span className="JobLocationText">{item.location.name}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <hr className="jobLine" />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderIndividualJob(this.props.data)}</div>;
  }
}

export default IndividualPosting;

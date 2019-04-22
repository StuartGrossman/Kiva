/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line react/prefer-stateless-function
class IndividualPosting extends Component {
  renderIndividualJob = (data) => {
    console.log(data);
    return (
      data.map((item, index) => {
        return (
          <div
            className={index % 2 === 0 ? 'grayScale' : 'whiteScale'}
            key={index}
          >
            <div className="row mediumFont">
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 " />
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ">
                <span className="smallMarginRight">{item.title}, </span>
                <span>{item.location.name}</span>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
                <span>
                  <a
                    href={item.absolute_url}
                    alt="job_link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div className="jobPostingMargin container-fluid">
        <div className="container">
          <h3>Job Boards</h3>

          {this.renderIndividualJob(this.props.data)}
        </div>
      </div>
    );
  }
}

export default IndividualPosting;

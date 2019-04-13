import React, { Component } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line react/prefer-stateless-function
class IndividualPosting extends Component {
  // eslint-disable-next-line consistent-return
  render() {
    return (
      <div className="jobPostingMargin container-fluid">
        <div>
          <h3 className="smallMarginBottom">Job Section</h3>
          <div className="row grayScale">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-8 ">
              <span>Title</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
              <span>Location</span>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-8 ">
              <span>Title</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
              <span>Location</span>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div className="row grayScale">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-8 ">
              <span>Title</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
              <span>Location</span>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-8 ">
              <span>Title</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
              <span>Location</span>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div className="row grayScale">
            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-8 ">
              <span>Title</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
              <span>Location</span>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualPosting;

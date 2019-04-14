import React, * as react from 'react';
import IndividualPosting from './IndividualPosting';
// eslint-disable-next-line react/style-prop-object
class JobPostings extends react.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1>OPEN POSITIONS</h1>
              <br />
              <React.Fragment>
                <IndividualPosting />
                <br />
                <IndividualPosting />
                <br />
                <IndividualPosting />
                <br />
                <IndividualPosting />
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobPostings;

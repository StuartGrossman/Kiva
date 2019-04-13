import React, * as react from 'react';
import IndividualPosting from './IndividualPosting';
// eslint-disable-next-line react/style-prop-object
class JobPostings extends react.Component {
  render() {
    return (

      <div className="row container-fluid">
        <div className="col-lg-2 col-md-1 col-sm-1 col-xs-1" />
        <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10">
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
        <div className="col-lg-2 col-md-1 col-sm-1 col-xs-1" />
      </div>
    );
  }
}

export default JobPostings;

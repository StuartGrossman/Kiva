import React, * as react from 'react';
import IndividualPosting from './IndividualPosting';
// eslint-disable-next-line react/style-prop-object
class JobPostings extends react.Component {
  render() {
    return (

      <div className="row container-fluid">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
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
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
      </div>
    );
  }
}

export default JobPostings;

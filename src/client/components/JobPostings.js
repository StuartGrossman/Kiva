/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent */
/* eslint-disable consistent-return */
import React, * as react from 'react';
// import JobPoster from './JobPoster';
import IndividualPosting from './IndividualPosting';
// eslint-disable-next-line react/style-prop-object
class JobPostings extends react.Component {
  constructor(props) {
    super(props);
    this.state = { jobData: null, loading: true };
  }

  componentDidMount() {
    fetch('api/getAllJobPostings')
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(result => this.setState({ jobData: result, loading: false }));
  }

  renderJobs = (data) => {
    console.log(data);
    return (
      data.map((item, index) => {
        return <IndividualPosting data={item} key={index} />;
      })
    );
  }

  render() {
    const { loading, jobData } = this.state;
    return (
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2>OPEN POSITIONS</h2>
                <br />
                <React.Fragment>
                  {loading ? 'loading Jobs' : this.renderJobs(jobData)}
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default JobPostings;

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import IndividualPosting from './IndividualPosting';

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = { jobData: null, loading: true, id: this.props.communityId };
    // const id = this.props.communityId;
  }

  componentDidMount() {
    const that = this;
    fetch(
      `https://boards-api.greenhouse.io/v1/boards/kivaorg/departments/${that.props.id}`
    )
      .then(res => res.json())
    // .then(res => console.log(res.jobs))
      .then(result => this.setState({ jobData: result.jobs, loading: false }));
  }

  renderJobs = (jobsData) => {
    if (jobsData.length === 0) {
      return (
        <div className="">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
              <span>Check back soon</span>
            </div>
            <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6 col-6 " />
          </div>
          <hr className="jobLine" />
        </div>
      );
    }
    return <IndividualPosting data={jobsData} />;
  };

  render() {
    const { loading, jobData } = this.state;

    return (
      <div>
        <div className="">
          <div className="">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 className="JobCatTitle">{this.props.title}</h2>
                <h3 className="JobCatDes">{this.props.desc}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{ marginTop: "10px" }}>
          <div className="">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <h3 className="Role">Role</h3>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <h3 className="Location">Location</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <hr className="topLineJob jobLine" />
            </div>
          </div>
        </div>

        {loading ? 'loading Jobs' : this.renderJobs(jobData)}
      </div>
    );
  }
}

export default JobList;

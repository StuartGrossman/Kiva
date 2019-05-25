/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent */
/* eslint-disable consistent-return */
import React, * as react from 'react';
// import JobPoster from './JobPoster';
import JobList from './JobList';
// eslint-disable-next-line react/style-prop-object
class JobPostings extends react.Component {
  constructor(props) {
    super(props);
    this.state = { jobData: null, loading: true };
    this.CommunityId = '55058';
    this.CommunityDesc = 'The Kiva family is big and we support over 1.5 million lenders on our platform. It’s our community that makes Kiva’s impact possible. Help us support and inspire them to keep Kiva growing!';
    this.EngineeringId = '9253';
    this.EngineeringDesc = 'Get ready to tackle global challenges and shape the technological solutions we use to build a more inclusive financial system. Oh, and get ready to do the best work of your career.';
    this.LegalFinanceOperationsId = '9256';
    this.LegalFinanceOperationsDesc = 'We make sure the lights stay on, the fine print gets read, and the bills get paid. Another thing we do? Keep true to Kiva’s values while advising our teams on business decisions. Ready to make an impact? Let’s do it.';
    this.MarketingId = '21654';
    this.MarketingDesc = 'Marketing shares our mission with the world. Be part of a team that helps deliver our message and inspires people to take action.  Our job? To own everything from product marketing to PR to external communications and inspire a world where everyone thrives.';
    this.PeopleCultureId = '9672';
    this.PeopleCultureDesc = 'We’re the movers and shakers behind the scenes AKA the people who enable Kiva employees do their best work. Our big thing? To keep Kiva staff growing with training and development, to find more amazing people, and to handle all things benefits-related.';
    this.ProductDesignId = '9671';
    this.ProductDesignDesc = "Is networking kinda your thing? Want to work with corporate partners to develop Kiva's newest programs? Great! Our Strategic Development & Partnerships team would love to meet you/ make your acquaintance!";
    this.StrategicDevPartnershipsId = '9673';
    this.StrategicDevPartnershipsDesc = "Is networking kinda your thing? Want to work with corporate partners to develop Kiva's newest programs? Great! Our Strategic Development & Partnerships team would love to meet you/ make your acquaintance!";
    this.ImpactInvestmentsId = '9281';
    this.ImpactInvestmentsDesc = 'Are you fond of the phrase impact and risk assessment? Great, because your team is responsible for every loan funded through Kiva. Even better if you aren’t afraid to seek out new opportunities to help us keeping building a more financially inclusive world.';
    this.FellowshipsId = '24218';
    this.FellowshipsDesc = 'TBA';
  }

  render() {
    return (
        <div className="container-fluid" id="JobSection">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 className="Open-Positions" style={{ marginTop: '90px' }}>OPEN POSITIONS</h2>
                <br />
                <React.Fragment>
                  <JobList id={this.CommunityId} title="Community" desc={this.CommunityDesc} />
                  <br />
                  <JobList id={this.EngineeringId} title="Engineering" desc={this.EngineeringDesc} />
                  <br />
                  <JobList id={this.LegalFinanceOperationsId} title="Legal, Finance & Operations" desc={this.LegalFinanceOperationsDesc} />
                  <br />
                  <JobList id={this.MarketingId} title="Marketing & Communications" desc={this.MarketingDesc} />
                  <br />
                  <JobList id={this.PeopleCultureId} title="People & Culture" desc={this.PeopleCultureDesc} />
                  <br />
                  <JobList id={this.ProductDesignId} title="Product & Design" desc={this.ProductDesignDesc} />
                  <br />
                  <JobList id={this.StrategicDevPartnershipsId} title="Strategic Development & Partnerships" desc={this.StrategicDevPartnershipsDesc} />
                  <br />
                  <JobList id={this.ImpactInvestmentsId} title="Impact Investments" desc={this.ImpactInvestmentsDesc} />
                  <br />
                  <JobList id={this.FellowshipsId} title="Fellowships" desc={this.FellowshipsDesc} />
                  <br />
                </React.Fragment>
                  <div style={{ marginBottom: '100px'}}>
                    <h1 className="Volunteer-Op">Volunteer Opportunities</h1>
                    <span className="Volunteer-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default JobPostings;

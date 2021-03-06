/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable lines-between-class-members */
// eslint-disable-next-line react/prefer-stateless-function
import React, { Component } from 'react';
import IndividualBenefit from './IndividualBenefit';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import icon4 from '../../images/icon4.svg';
import icon5 from '../../images/icon5.svg';
import icon6 from '../../images/icon6.svg';
import icon7 from '../../images/icon7.svg';

class Benefits extends Component {
  constructor() {
    super();
    this.benefitOne = 'Stay Healthy';
    this.detailOne = 'We offer medical, dental, and vision insurance. Several offerings provide 100% coverage of premiums for you, plus 80-90% coverage of premiums for your dependents. ';
    this.benefitTwo = 'Take Time Off';
    this.detailTwo = 'Life happens. So do vacations. Take time off for both. All salaried employees get unlimited PTO.';
    this.benefitThree = 'Commute & Save';
    this.detailThree = 'We love working together so much, we’re listing it as a benefit. Because it is. There’s always time to connect with coworkers. Whether it’s an All Hands meetings, a Brown Bag session, or our Lunch Club, we’re always building a more diverse and inclusive community.';
    this.benefitFour = 'Build Community';
    this.detailFour = 'We love working together so much, we’re listing it as a benefit. Because it is. There’s always time to connect with coworkers. Whether it’s an All Hands meeting, a Brown Bag session, or our Lunch Club, we’re always building a more diverse and inclusive community.';
    this.benefitFive = 'Grow Your Career, Grow Your Mind';
    this.detailFive = 'Boredom isn’t an option. All full-time employees get a $750 stipend for continuing education, conferences, and classes.';
    this.benefitSix = 'Take Parental Leave';
    this.detailSix = 'Kids are a lot of work. We give all new parents (biological, adoptive, and foster) 10 weeks of paid time away, plus fully paid pregnancy disability leave for birth moms.';
    this.benefitSeven = 'Retire (eventually)';
    this.detailSeven = 'Every year, we’ll give you $2,500 toward your 401(k).';
  }
  render() {
    return (
      <div className="container-fluid" style={{ marginTop: '55px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="Benefits-Header">Let’s talk perks.</h1>
              <p className="Benefits-Sub-Text">
                We want our employees to feel good about their careers. We also
                want them to feel good in general. To help out, we offer great
                health benefits and tons of perks.
              </p>
              <br />
              <IndividualBenefit
                color="#f6f6f6"
                benefit={this.benefitOne}
                detail={this.detailOne}
                icon={icon1}
              />
              <IndividualBenefit
                color="white"
                benefit={this.benefitTwo}
                detail={this.detailTwo}
                icon={icon2}
                customClass="TimeOffIcon"
              />
              <IndividualBenefit
                color="#f6f6f6"
                benefit={this.benefitFour}
                detail={this.detailFour}
                icon={icon4}
              />
              <IndividualBenefit
                color="white"
                benefit={this.benefitFive}
                detail={this.detailFive}
                icon={icon5}
                customClass2="Grow-Your-Mind"
              />
              <IndividualBenefit
                color="#f6f6f6"
                benefit={this.benefitSix}
                detail={this.detailSix}
                icon={icon6}
              />
              <IndividualBenefit
                color="white"
                benefit={this.benefitSeven}
                detail={this.detailSeven}
                icon={icon7}
              />
              <div
                className="row smallHeightDem"
                style={{ backgroundColor: this.props.color }}
              >
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 Margin-Auto" />
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 Margin-Auto" />
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 Margin-Auto">
                  <p className="Benefit-Des" style={{paddingBottom: '145px'}}>
                    *Benefits listed above may differ for roles based outside
                    the US.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Benefits;

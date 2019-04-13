/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import IndividualBenefit from './IndividualBenefit';

// eslint-disable-next-line react/prefer-stateless-function
class Benefits extends Component {
  constructor() {
    super();
    this.benefitOne = 'Stay Healthy';
    this.detailOne = 'We offer Medical, dental, and vision insurance. Several offerings provide 100% coverage of premiums for you, plus 80-90% coverage of premiums for your dependents. ';
    this.benefitTwo = 'Take Time Off';
    this.detailTwo = 'Life happens. So do vacations. Take time off for both. All salaried employees get unlimited PTO. Full-time, hourly employees also enjoy generous time off';
    this.benefitThree = 'Commute & Save';
    this.detailThree = 'We love working together so much, we’re listing it as a benefit. Because it is. There’s always time to connect with coworkers. Whether it’s an All Hands meetings, a Brown Bag session, or our Lunch Club, we’re always building a more diverse and inclusive community';
    this.benefitFour = 'Build Community'
    this.detailFour = 'We love working together so much, we’re listing it as a benefit. Because it is. There’s always time to connect with coworkers. Whether it’s an All Hands meetings, a Brown Bag session, or our Lunch Club, we’re always building a more diverse and inclusive community.';
    this.benefitFive = 'Grow Your Career, Grow Your Mind';
    this.detailFive = 'Boredom isn’t an option. All full-time employees get a $750 stipend for continuing education, conferences, and classes.';
    this.benefitSix = 'Take Parental Leave';
    this.detailSix = 'Kids are a lot of work. We give all new parents (biological, adoptive, and foster) 16 weeks of paid time away. Take it all at once. Take it one week at a time. Your call.';
    this.benefitSeven = 'Retire (eventually)';
    this.detailSeven = 'Every year, we’ll give you $2,500 toward your 401(k).';
  }
  render() {
    return (
      <div className="row container-fluid">
        <div className="col-lg-2 col-md-1 col-sm-1 col-xs-2" />
        <div className="col-lg-8 col-md-10 col-sm-10 col-xs-10">
          <h3>BENEFITS</h3>
          <br />
          <IndividualBenefit color="#e9e9e9" benefit={this.benefitOne} detail={this.detailOne} />
          <IndividualBenefit color="white" benefit={this.benefitTwo} detail={this.detailTwo} />
          <IndividualBenefit color="#e9e9e9" benefit={this.benefitThree} detail={this.detailThree} />
          <IndividualBenefit color="white" benefit={this.benefitFour} detail={this.detailFour} />
          <IndividualBenefit color="#e9e9e9" benefit={this.benefitFive} detail={this.detailFive} />
          <IndividualBenefit color="#white" benefit={this.benefitSix} detail={this.detailSix} />
          <IndividualBenefit color="#e9e9e9" benefit={this.benefitSeven} detail={this.detailSeven} />


        </div>
        <div className="col-lg-2 col-md-1 col-sm-1 col-xs-2" />
      </div>
    );
  }
}

export default Benefits;
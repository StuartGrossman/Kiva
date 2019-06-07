/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Type1 from '../images/Type1.jpg';
import Type2 from '../images/Type2.jpg';
import Type3 from '../images/Type3.jpg';

class OfficeType extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="New-Section-FPO-Titl">
                The world is your office.
              </h1>
              <p className="Kiva-fellows-are-bas">
                A Kiva fellowship isn’t your typical 9 to 5 job. It’s much
                more of a everyday-is-new, in-the-field kind of thing. As
                in, sometimes you’ll quite literally be in a field. In the
                course of your fellowship, you’ll meet with borrowers,
                conduct trainings, and figure out ways to make our
                partnerships better. No two fellowships are the same though.
                Your work will also depend on your skills, aspirations, and
                our partner needs. There’s always a lot to do, and no day is
                average.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: '50px', marginBottom: '50px'}}>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" />

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <a href="#JobSection" className="Check-out-our-open-p">
                Check out our open positions
              </a>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" />
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="New-Section-FPO-Titl">
                We don’t have a type.
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 smallMarginTop">
              <img
                src={Type1}
                className="img-fluid"
                style={{ height: '349px', width: '100%' }}
              />
              <p className="As-a-long-time-Kiva">
                The Kiva fellowship gave me the critical field experience I
                needed to move away from the private sector. I felt so alive
                in the field, closely working with partners and interacting
                with beneficiaries... Truly, a great experience at all
                levels – personal and professional!
              </p>
              <p className="typePerson">Ariadni Liakis, FINCA Haiti</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 smallMarginTop">
              <img
                src={Type2}
                className="img-fluid"
                style={{ height: '349px', width: '100%' }}
              />
              <p className="As-a-long-time-Kiva">
                As a long-time Kiva lender, I wanted to experience the
                borrowers' reality first-hand, to see how Field Partners
                manage lenders' funds and what difference Kiva loans make
                for people. I now work as an educator, helping refugees
                learn basics of Swedish language, society and culture.
              </p>
              <p className="typePerson">Oleg Izyumenko, AlphaCE</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 smallMarginTop">
              <img
                src={Type3}
                className="img-fluid"
                style={{ height: '349px', width: '100%' }}
              />
              <p className="As-a-long-time-Kiva">
                After 10 years working in the audit/banking sector, the Kiva
                fellowship was a great career break with possibility to
                explore new horizons. The experience has heart; the
                connections between you and your work cement your true
                being.
              </p>
              <p className="typePerson">Ariadni Liakis, FINCA Haiti</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeType;

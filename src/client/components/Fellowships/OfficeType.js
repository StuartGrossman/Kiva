/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Type1 from "../../images/Type1.jpg";
import Type2 from "../../images/Type2.jpg";
import Type3 from "../../images/Type3.jpg";

class OfficeType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSent: false
    };
  }

  // sendEmail = () => {
  //   fetch('https://pages.kiva.org/fellows/application-notification', {
  //     method: 'POST',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': 'https://pages.kiva.org'
  //     }),
  //     body: JSON.stringify({
  //       email: this.state.email,
  //     })
  //   })
  //     .then((responseText) => {
  //       console.log(responseText);
  //       this.setState({ emailSent: true });
  //     })
  //     .catch((error) => {
  //       this.setState({ emailSent: false });
  //       // console.error(error);
  //     });
  // }

  render() {
    return (
      <div className="container-fluid" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="New-Section-FPO-Titl">
                The world is your office.
              </h1>
              <p className="Kiva-fellows-are-bas">
                A Kiva fellowship isn’t your typical 9 to 5 job. It’s much more
                of a everyday-is-new in-the-field kind of thing. As in,
                sometimes you’ll quite literally be in a field. In the course of
                your fellowship, you may meet with borrowers, conduct training,
                or figure out ways to make our partnerships better. No two
                fellowships are the same though. Your work will also depend on
                your skills, aspirations, and our partner needs. There’s always
                a lot to do, and no day is average.
              </p>
            </div>
          </div>
         
          <div className="row" style={{ marginBottom: "50px" }}>
            {/* <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2" /> */}

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="New-Section-FPO-Titl">Kiva Fellows Application</h1>
              {this.state.emailSent ? (
                <h4 className="Email-Header">
                  Your email has been successfully sent thankyou for your
                  interest
                </h4>
              ) : (
                <div>
                  <h1 className="Kiva-fellows-are-bas">
                    Our Kiva Fellows Program has two cohorts a year. One fellow
                    cohort starts in early February and ends in late July of
                    that same year. The second fellow cohort starts in late July
                    and ends in late January the following year.
                  </h1>
                  <h1 className="Kiva-fellows-are-bas">
                    No current applications open at this time? Sign up&nbsp;
                    <a
                      href="https://forms.gle/n1guoPMVmuuZT5ZSA"
                      target="_blank"
                    >
                      here
                    </a>
                    &nbsp;to be notified via email when recruiting for our
                    fellowship positions begins.
                  </h1>
                  {/* <a
                    href="https://forms.gle/n1guoPMVmuuZT5ZSA"
                    target="_blank"
                  >
                    <input
                      style={{ backgroundColor: 'white'}}
                      type="text"
                      disabled

                      className="Rectangle Margin-Auto form-control"
                    />
                  </a> */}
                </div>
              )}
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2" /> */}
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="New-Section-FPO-Titl">We don’t have a type.</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 smallMarginTop">
              <img src={Type1} className="img-fluid" />
              <p className="As-a-long-time-Kiva">
                The Kiva fellowship gave me the critical field experience I
                needed to move away from the private sector. I felt so alive in
                the field, closely working with partners and interacting with
                beneficiaries... Truly, a great experience at all levels –
                personal and professional!
              </p>
              <p className="typePerson">Maryse Martin, CARE</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 smallMarginTop">
              <img src={Type2} className="img-fluid" />
              <p className="As-a-long-time-Kiva">
                As a long-time Kiva lender, I wanted to experience the
                borrowers' reality first-hand, to see how Field Partners manage
                lenders' funds and what difference Kiva loans make for people. I
                now work as an educator, helping refugees learn basics of
                Swedish language, society and culture.
              </p>
              <p className="typePerson">Oleg Izyumenko, AlphaCE</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 smallMarginTop">
              <img src={Type3} className="img-fluid" />
              <p className="As-a-long-time-Kiva">
                After 10 years working in the audit/banking sector, the Kiva
                fellowship was a great career break with possibility to explore
                new horizons. The experience has heart; the connections between
                you and your work cement your true being.
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

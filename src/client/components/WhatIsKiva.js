import React, { Component } from 'react';
import HeaderText from './HeaderText';

class WhatIsKiva extends Component {
  state = {};

  constructor() {
    super();
    this.titleOne = 'Smart? Passionate? Kind? You’ll fit in at Kiva.';
    this.descOne = 'We’re building a more financially inclusive world. And we’re doing it with an amazing, diverse group of people. Want to make a difference? Let’s chat.';
    this.titleTwo = 'Change the world. Do it with amazing people.';
    this.descTwo = 'Good news: You don’t have to choose between brilliant co-workers and ones you actually like. Better news: Our team is growing. We hope you’ll grow with us.';
    this.titleThree = 'Think innovation and inclusively go together? Us too.';
    this.descThree = 'We’re passionate about making the world a more financially inclusive place. Same? Then join us. We’re smart. We’re creative. We’re diverse. Oh, and we’re pretty fun to hang out with, too.';
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="Change-the-world-Do">
                Change the world.
              </h1>
              <h1 className="Change-the-world-Do">
                Do it with amazing people.
              </h1>
              <p>
                Good news: You don’t have to choose between brilliant
                co-workers and ones you actually like. Better news: Our team
                is growing.&nbsp;
                <a href="#JobSection" className="JobLinkText">
                Ready to grow with us? Check out our open
                positions.
                </a>
              </p>
              {/* <React.Fragment>
                <br />

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <HeaderText title={this.titleThree} desc={this.descThree} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <HeaderText title={this.titleTwo} desc={this.descTwo} />
                  </div>
                </div>
                <br />

                <HeaderText title={this.titleOne} desc={this.descOne} />
              </React.Fragment> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatIsKiva;

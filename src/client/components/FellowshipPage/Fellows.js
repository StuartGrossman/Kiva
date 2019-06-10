/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Image from 'react-graceful-image';
import FellowJpg from '../../images/Fellow.jpg';

class Fellows extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ marginTop: '50px'}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h1 className="New-Section-FPO-Titl">New Section FPO Title</h1>
              <p className="Kiva-fellows-are-bas">
              Kiva fellows are based in 60+ countries throughout the developing world.
              That means there’s quite a bit of possibility when it comes to where you’ll be.
              We encourage you to apply wherever your skills and interests lie.
              Just keep in mind we might feel you’re a better fit elsewhere.
              We’ll talk through everything in the interview process though, so don’t worry.
              Wherever you end up, you’ll get around quite a bit.
              You’ll have a “home base,” but fellows typically work with several field partners in multiple countries.
              It’s a chance to grow, and a chance to explore.
              </p>
              <div>
                <Image src={FellowJpg} className="img-fluid fellowsImage" style={{ marginTop: '69px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fellows;

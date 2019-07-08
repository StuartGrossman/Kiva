/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="xbLegacyNav">
        <footer className="siteFooter">
          <nav className="siteFooter-nav small-footer hide-for-large-up">
            <ul className="siteFooter-links">
              <li className="footer-link-borrow">
                <a href="https://www.kiva.org/borrow">Borrow</a>
              </li>
              <li className="footer-link-about">
                <a href="https://www.kiva.org/about">About</a>
              </li>
              <li className="footer-link-help">
                <a href="https://www.kiva.org/help">Help</a>
              </li>
              <li className="footer-link-careers">
                <a href="https://www.careers.kiva.org">Careers</a>
              </li>
              <li className="footer-link-map">
                <a href="https://www.kiva.org/sitemap">Site map</a>
              </li>
            </ul>

            <div className="siteFooter-policy">
              <a
                href="https://www.kiva.org/legal/privacy"
                className="siteFooter-privacy"
              >
                Privacy policy
              </a>
              <a
                href="https://www.kiva.org/legal/terms"
                className="siteFooter-tos"
              >
                Terms of use
              </a>
            </div>

            <div className="siteFooter-legal">
              <div className="siteFooter-disclaimer">
                Lending through Kiva involves risk of principal loss. Kiva does
                not guarantee repayment or offer a financial return on your
                loan.
              </div>
              <div className="siteFooter-copyright">
                © 2019 Kiva. All rights reserved.
              </div>
            </div>
          </nav>

          <nav className="siteFooter-nav large-footer show-for-large-up rowFooter">
            <div className="small-3 column">
              <div className="siteFooter-borrow-group siteFooter-group">
                <h1>Borrow</h1>
                <div>Loans for entrepreneurs doing amazing things.</div>
                <ul className="siteFooter-links">
                  <li>
                    <a
                      href="https://www.kiva.org/borrow"
                      className="borrow_href"
                    >
                      Apply now
                    </a>
                  </li>
                </ul>
              </div>

              <div className="siteFooter-explore-group siteFooter-group">
                <h1>Explore</h1>
                <ul className="siteFooter-links">
                  <li>
                    <a
                      href="https://www.kiva.org/protocol"
                      className="protocol_href"
                    >
                      Protocol
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kiva.org/gifts" className="gifts_href">
                      Gifts
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/live"
                      className="happening_href"
                    >
                      Happening now
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/sitemap"
                      className="site_map_href"
                    >
                      Site map
                    </a>
                  </li>
                  <li>
                    <a href="http://build.kiva.org/" className="dev_api_href">
                      Developer API
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/legal/privacy"
                      className="privacy_policy_href"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/legal/terms"
                      className="tou_href"
                    >
                      Terms of use
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="small-3 column">
              <div className="-">
                <h1 style={{ marginTop: "0px" }}>Get to know us</h1>
                <ul className="siteFooter-links">
                  <li>
                    <a href="https://www.kiva.org/about" className="about_href">
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/about/how"
                      className="how_kiva_works_href"
                    >
                      How Kiva works
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/about/how#faq-hkw-section"
                      className="faq_href"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/about/where-kiva-works"
                      className="where_kiva_works_href"
                    >
                      Where Kiva works
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kiva.org/blog" className="blog_href">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/partner-with-us"
                      className="partner_with_us_href"
                    >
                      Partner with us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/help/contact-us"
                      className="contact_href"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kiva.org/help" className="help_href">
                      Help
                    </a>
                  </li>
                </ul>
              </div>

              <div className="siteFooter-community-group siteFooter-group">
                <h1 style={{ marginTop: "25px" }}>Community</h1>
                <ul className="siteFooter-links">
                  <li>
                    <a href="https://www.kiva.org/teams" className="teams_href">
                      Lending teams
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/kivau/intro"
                      className="students_href"
                    >
                      Students and educators
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="small-6 column">
              <div className="siteFooter-statement-group siteFooter-group 501c3_statement">
                <div>
                  Kiva is a 501(c)3 U.S. nonprofit fueled by passionate people.
                  Founded in 2005, and based in San Francisco, with offices in
                  Bangkok, Nairobi, Portland and staff around the globe.
                </div>
                <ul className="siteFooter-links">
                  <li>
                    <a
                      href="https://www.kiva.org/donate/supportus"
                      className="donate_href"
                    >
                      Donate to Kiva here.
                    </a>
                  </li>
                </ul>
              </div>

              <div className="siteFooter-us-group siteFooter-group">
                <h1>Work with us</h1>
                <ul className="siteFooter-links links-list">
                  <li>
                    <a
                      href="https://www.careers.kiva.org"
                      className="careers_href"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/work-with-us/internvolunteers"
                      className="internships_href"
                    >
                      Volunteer internships
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.careers.kiva.org/fellowships"
                      className="fellows_href"
                    >
                      Kiva fellows
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/work-with-us/reviewers"
                      className="rtp_href"
                    >
                      Review and translation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kiva.org/trustees"
                      className="rtp_href"
                    >
                      Trustees
                    </a>
                  </li>
                </ul>
              </div>

              <div className="siteFooter-legal siteFooter-group">
                <div className="siteFooter-disclaimer">
                  Lending through Kiva involves risk of principal loss. Kiva
                  does not guarantee repayment or offer a financial return on
                  your loan.
                </div>
                <div className="siteFooter-copyright">
                  © 2019 Kiva. All rights reserved.
                </div>
              </div>
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Footer;

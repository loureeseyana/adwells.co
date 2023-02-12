import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {

render () {
    return (
        <footer className="footer_wrapper" id="contact">
  <div className="container">
    <section className="page_section contact" id="contact">
      <div className="contact_section">
        <h2>Get In Touch</h2>
        <h6>
          Interested in my services? Want a consult on a project? Whatever you need, just hit me up.
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-4 wow fadeInLeft">
          <div className="contact_info">
            <div className="detail">
              <h4>Ariel</h4>
              <p>New Orleans, LA</p>
            </div>
            <div className="detail">
              <h4>Email us</h4>
              <p>loureeseyana@gmail.com</p>
            </div>
          </div>
          <ul className="social_links">
          <li
                  className="github animated bounceIn wow delay-03s animated"
                  style={{ visibility: "visible", animationName: "bounceIn" }}
                >
                  <a href="https://drive.google.com/file/d/155vLVDkx1Jx-uRmEZwaGc15CfSTwTxgZ/view?usp=share_link">
                  <FontAwesomeIcon icon={faFilePdf} />
                  </a>
                </li>
                <li
                  className="linkedin animated bounceIn wow delay-02s animated"
                  style={{ visibility: "visible", animationName: "bounceIn" }}
                >
                  <a href="https://www.linkedin.com/in/arieldwells">
                  <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li
                  className="github animated bounceIn wow delay-03s animated"
                  style={{ visibility: "visible", animationName: "bounceIn" }}
                >
                  <a href="https://www.github.com/loureeseyana">
                  <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
        </div>
        <div className="col-lg-8 wow fadeInLeft delay-06s">
          {/*NOTE: Update your email Id in "contact_me.php" file in order to receive emails from your contact form*/}
          <form name="sentMessage" id="contactForm" noValidate="">
            <div className="control-group">
              <div className="controls">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  id="name"
                  required=""
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block" />
              </div>
            </div>
            <div className="control-group">
              <div className="controls">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  required=""
                  data-validation-required-message="Please enter your email"
                />
              </div>
            </div>
            <div className="control-group">
              <div className="controls">
                <textarea
                  rows={10}
                  cols={100}
                  className="form-control"
                  placeholder="Message"
                  id="message"
                  required=""
                  data-validation-required-message="Please enter your message"
                  minLength={5}
                  data-validation-minlength-message="Min 5 characters"
                  maxLength={999}
                  style={{ resize: "none" }}
                  defaultValue={""}
                />
              </div>
            </div>
            <div id="success"> </div> {/* For success/fail messages */}
            <button type="submit" className="btn btn-primary pull-right">
              Send
            </button>
            <br />
          </form>
        </div>
      </div>
    </section>
  </div>
  <div className="container">
    <div className="footer_bottom">
      <span>
        Copyright © 2018.{" "}
        <a
          href="https://webthemez.com/free-bootstrap-templates/"
          target="_blank"
        >
          Bootstrap Templates
        </a>{" "}
        By WebThemez
      </span>{" "}
    </div>
  </div>
</footer>

    )
}
};
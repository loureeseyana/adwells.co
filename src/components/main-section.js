import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class MainSection extends Component {
  render() {
    return (

        <section id="hero_section" className="top_cont_outer">
  <div className="hero_wrapper">
    <div className="container">
      <div className="hero_section">
        <div className="row">
          <div className="col-md-6">
            <div className="top_left_cont intro zoomIn wow animated">
              <h2>
                I’m Ariel
                <br /> <strong>Software Engineer Extraordinare</strong>
              </h2>
              <p>
                I am a true full stack developer. I love React, Node.js and Typescript. Also willing to learn more.
                I enjoy helping small businesses expand their technological offerings, through project management and search engine optimization services.
                In addition, mentoring aspiring engineers and developers is a huge passion of mine.{" "}
              </p>
              <div className="underline" />
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
          </div>
          <div className="col-md-6">
            <img alt="" src="img/profile-pic.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
    }
};

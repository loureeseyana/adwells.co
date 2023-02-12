import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDiagramProject, faSackDollar, faUsersRays } from '@fortawesome/free-solid-svg-icons'

export default class Services extends Component {
    render() {
        return (
            <section id="service">
  <div className="container">
    <h2>Skills</h2>
    <h6>
      Some of my offerings. Send me your proposals and let's make it happen.
    </h6>
    <div className="service_wrapper">
      <div className="row">
        <div className="col-md-3">
          <div className="service-icon delay-03s animated wow  zoomIn">
            {" "}
            <span>
              <FontAwesomeIcon icon={faCode} />
            </span>{" "}
          </div>
          <div className="service-block">
            <h3 className="animated fadeInUp wow">Development</h3>
            <p className="animated fadeInDown wow">
              Web, desktop, mobile, database, cloud. Let's discuss your projects! {" "}
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service-icon icon2  delay-03s animated wow zoomIn">
            {" "}
            <span>
              <FontAwesomeIcon icon={faUsersRays} />
            </span>{" "}
          </div>
          <div className="service-block">
            <h3 className="animated fadeInUp wow">Mentorship</h3>
            <p className="animated fadeInDown wow">
              Interested in a career in technology? Want to be a developer? I can guide your journey.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service-icon icon3  delay-03s animated wow zoomIn">
            {" "}
            <span>
            <FontAwesomeIcon icon={faDiagramProject} />
            </span>{" "}
          </div>
          <div className="service-block">
            <h3 className="animated fadeInUp wow">Project Management</h3>
            <p className="animated fadeInDown wow">
              Manage and maintain new and existing projects for your small business.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service-icon icon3  delay-03s animated wow zoomIn">
            {" "}
            <span>
            <FontAwesomeIcon icon={faSackDollar} />
            </span>{" "}
          </div>
          <div className="service-block">
            <h3 className="animated fadeInUp wow">SEO Optimization</h3>
            <p className="animated fadeInDown wow">
              Let me improve your traffic and earn you more money in the process!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
};
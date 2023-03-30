import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Menu extends Component {
    render() {

return (

    <header id="header_wrapper">
    <nav className="navbar sticky-top navbar-inverse" role="navigation">
      <div id="main-nav" className="navbar-expand-lg navStyle">
        <ul className="nav navbar-nav" id="mainNav">
          <li className="active">
            <a href="/" className="scroll-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="scroll-link">
              About Me
            </a>
          </li>
          <li>
            <a href="/services" className="scroll-link">
              Skills
            </a>
          </li>
          <li>
            <a href="/experience" className="scroll-link">
              Experience
            </a>
          </li>
          <li>
            <a href="/contact" className="scroll-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
</header>
  );
}
};
import React from 'react'
import { Link } from 'gatsby'

import logo from '../../img/logo.svg'
import facebook from '../../img/social/facebook.svg';
import twitter from '../../img/social/twitter.svg';

const Header = () => (
  <header className="l-header">
    <div className="headerTop">
      <div className="container">
        <div className="social">
          <a href="http://facebook.com">
            <img src={facebook} alt="Facebook"/>
          </a>
          <a href="http://twitter.com">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
    <div className="headerBottom">
      <div className="container">
        <div className="logo">
          <img 
            src={logo}
            alt="Cirrus Design"
          />
        </div>
        <div className="navbar">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/scanning-applications">
            Scanning Applications
          </Link>
          <Link className="navbar-item" to="/projects">
            Projects
          </Link>
          <Link className="navbar-item" to="/fulfillment">
            Fulfillment
          </Link>
          <Link className="navbar-item" to="/news">
            News
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header

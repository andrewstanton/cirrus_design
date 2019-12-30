import React from "react";
import SocialIcons from "../SocialIcons";
import { StaticQuery, graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/logo.png";

class Header extends React.Component {
  state = {
    toggle: false
  };

  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
  }

  componentWillMount() {
    this.addEvents();
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  addEvents = () => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("scroll", this.handleScroll);
  };

  removeEvents = () => {
    if (typeof window === "undefined") {
      return;
    }

    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    const scrollTarget = window,
      stickyDiv = this.headerRef.current || null,
      scrollRect = {
        height: scrollTarget.innerHeight,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        x: scrollTarget.scrollX,
        y: scrollTarget.scrollY
      };

    // If no sticky ref set
    if (!stickyDiv) {
      return;
    }
    const stickyRect = stickyDiv.getBoundingClientRect();
    const stuckTop = scrollRect.y > stickyRect.height;
    this.setState({ stuckTop });
  };

  renderMenuClass = () => {
    const navMenu = this.state.toggle ? `m-nav_menu--openmenu` : "";
    return `m-nav_menu ${navMenu}`;
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeaderQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <header
              className={`s-header ${this.state.stuckTop &&
                "s-header--sticky"}`}
              ref={this.headerRef}
            >
              <section className="s-header_top">
                <div className="wrapper">
                  <div className="s-header_social">
                    <SocialIcons />
                  </div>
                </div>
              </section>
              <section className="s-header_bottom">
                <div className="wrapper s-header_wrapper">
                  <button
                    className="btn--link s-header_menuButton"
                    onClick={() =>
                      this.setState({ toggle: !this.state.toggle })
                    }
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>

                  <div className="s-header_logo">
                    <Link to="/">
                      <img
                        className="s-header_logo_img"
                        src={logo}
                        alt={data.site.siteMetadata.title}
                      />
                    </Link>
                  </div>

                  <nav className="m-nav">
                    <ul className={this.renderMenuClass()}>
                      <li>
                        <Link to="/3d-scanning">3D Scanning</Link>
                        <div className="m-nav_dd">
                          <ul>
                            <li>
                              <Link to="/services/industrial-plants">
                                Industrial Plants
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/aec">
                                Arch Eng Const (AEC)
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/real-estate">
                                Real Estate
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/reverse-engineering">
                                Reverse Engineering
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/conceptual-design-testing">
                                Conceptual Design + Testing
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to="/3d-modeling-printing">3D Modeling</Link>
                      </li>
                      <li>
                        <Link to="/engineering-design-drafting">
                          Engineering
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                        <div className="m-nav_dd">
                          <ul>
                            <li>
                              <Link to="/about/mission">Mission</Link>
                            </li>
                            <li>
                              <Link to="/about/testimonials">Testimonials</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </section>
            </header>
          );
        }}
      />
    );
  }
}

export default Header;

import React from 'react'
import SocialIcons from '../SocialIcons'
import { StaticQuery, graphql, Link } from 'gatsby'

import logo from '../../img/logo.png';

const Header = () => (
    <StaticQuery 
        query={ graphql`
            query HeaderQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={ data => {
            const sticky = require('../../scripts/sticky-header');

            return (
                <header className="s-header">
                    <section className="s-header_top">
                        <div className="wrapper">
                            <div className="s-header_social">
                                <SocialIcons />
                            </div>
                        </div>
                    </section>
                    <section className="s-header_bottom">
                        <div className="wrapper">

                            <div className="s-header_logo">
                                <Link to="/">
                                    <img className="s-header_logo_img"
                                        src={ logo }
                                        alt={ data.site.siteMetadata.title } />
                                </Link>
                            </div>

                            <nav className="m-nav">
                                <ul className="m-nav_menu">
                                    <li>
                                        <Link to="/3d-scanning">3D Scanning</Link>
                                        <div className="m-nav_dd">
                                            <ul>
                                                <li>
                                                    <Link to="/services/industrial-plants">Industrial Plants</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/aec">Arch Eng Const (AEC)</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/real-estate">Real Estate</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/reverse-engineering">Reverse Engineering</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/conceptual-design-testing">Conceptual Design + Testing</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/3d-modeling-printing">3D Modeling</Link>
                                        <div className="m-nav_dd">
                                            <ul>
                                                <li>
                                                    <Link to="/services/3d-modeling">3D Modeling Anything</Link>
                                                    <div className="m-nav_dd">
                                                        <ul>
                                                            <li>
                                                                <Link to="/services/acad-sw">Using / ACAD + SW</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to="/services/3d-printing">3D Printing</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/engineering-design-drafting">Engineering</Link>
                                        <div className="m-nav_dd">
                                            <ul>
                                                <li>
                                                    <Link to="/services/hydro">Hydro</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/mechanical">Mechanical</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/electrical">Electrical</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/pid-machine-controls">PID's + Machine Controls</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/structural">Structural</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/other-services">Other Services</Link>
                                                    <div className="m-nav_dd">
                                                        <ul>
                                                            <li>
                                                                <Link to="/services/2d-document-scanning">2D Document Scanning</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/services/project-management">Project Management</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/services/fea-in-inventor-2019">FEA In Inventor 2019</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                        <div className="m-nav_dd">
                                            <ul>
                                                <li>
                                                    <Link to="/about/mission">Mission</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about/equipment">Equipment</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about/case-study">Case Study</Link>
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
)

export default Header
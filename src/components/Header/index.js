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
        render={ data => (
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
                                    <Link to="/">3D Scanning</Link>
                                    <div className="m-nav_dd">
                                        <ul>
                                            <li>
                                                <Link to="/">Industrial Plants</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Arch Eng Const (AEC)</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Real Estate</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Reverse Engineering</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Conceptual Design + Testing</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/">3D Modeling</Link>
                                    <div className="m-nav_dd">
                                        <ul>
                                            <li>
                                                <Link to="/">3D Modeling Anything</Link>
                                                <div className="m-nav_dd">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">Using / ACAD + SW</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="/">3D Printing</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/">Engineering</Link>
                                    <div className="m-nav_dd">
                                        <ul>
                                            <li>
                                                <Link to="/">Hydro</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Mechanical</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Electrical</Link>
                                            </li>
                                            <li>
                                                <Link to="/">PID's + Machine Controls</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Structural</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Other Services</Link>
                                                <div className="m-nav_dd">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">2D Document Scanning</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Project Management</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">FEA In Inventor 2019</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/">About</Link>
                                    <div className="m-nav_dd">
                                        <ul>
                                            <li>
                                                <Link to="/">Mission</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Equipment</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Case Study</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/">Contact</Link>
                                </li>
                            </ul> 
                        </nav>

                    </div>
                </section>
            </header>
        )}
    />
)

export default Header
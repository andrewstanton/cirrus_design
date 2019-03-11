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
                                    <Link to="/">Home</Link>
                                    <ul className="m-nav_dd">
                                        <li>
                                            <Link to="/">Sub Link</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Sub Link 2</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact Us</Link>
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
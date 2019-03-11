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
                        <div className="header-social">
                            <SocialIcons />
                        </div>
                    </div>
                </section>
                <section className="s-header_bottom">
                    <div className="wrapper">

                        <div className="logo">
                            <img className="logo_img" 
                                src={ logo }
                                alt={ data.site.siteMetadata.title } />
                        </div>

                        <nav className="m-nav">
                            <ul className="m-nav_menu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="mainNav_menu_item">
                                    <Link to="/">About Us</Link>
                                </li>
                                <li className="mainNav_menu_item">
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
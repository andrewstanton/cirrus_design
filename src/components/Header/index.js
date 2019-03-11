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
            <header className="site-header">
                <section className="site-header_top">
                    <div className="wrapper">
                        <div className="site-header_top-social">
                            <SocialIcons />
                        </div>
                    </div>
                </section>
                <section className="site-header_bottom">
                    <div className="wrapper">

                        <div className="logo">
                            <img className="logo_img" 
                                src={ logo }
                                alt={ data.site.siteMetadata.title } />
                        </div>

                        <nav className="nav">
                            <ul className="nav_menu">
                                <li className="menu_item">
                                    <Link to="/" className="menu_item_link">Home</Link>
                                </li>
                                <li className="menu_item">
                                    <Link to="/" className="menu_item_link">About Us</Link>
                                </li>
                                <li className="menu_item">
                                    <Link to="/" className="menu_item_link">Contact Us</Link>
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
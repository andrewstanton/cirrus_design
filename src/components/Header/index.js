import React from 'react'
import SocialIcons from '../SocialIcons';

const Header = () => (
    <header className="l-header">
        <section className="headerTop">

            <div className="wrapper">
                <div className="headerTop-socialWrapper">
                    <SocialIcons />
                </div>
            </div>

        </section>
        <section className="headerBottom">
            <div className="wrapper">

                <div className="logo">
                    {
                        // Logo Here
                    }
                </div>

                <nav className="nav">
                    <ul className="nav-ul">
                        <li>
                            Hey
                        </li>
                        <li>
                            Hey Hey
                            <ul className="nav-sub-ul">
                                <li>
                                    Sub Nav
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

            </div>
        </section>
    </header>
)

export default Header
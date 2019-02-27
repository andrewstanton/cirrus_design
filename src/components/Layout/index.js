import React from 'react'
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({children}) => (
    <div className="layout">
        <Header />
        
        <section className="l-content">
            { children }
        </section>

        <Footer />
    </div>
)

export default Layout
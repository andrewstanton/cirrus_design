import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import "../../styles/main.sass";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />

    <section className="l-content">{children}</section>

    <Footer />
  </div>
);

export default Layout;

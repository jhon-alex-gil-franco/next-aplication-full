import React, { Children } from "react";

import Navigation from "./ui/Navbar.js";
import Footer from "./ui/Footer.js"
import Header from "./ui/Header.js"

const Layout = ({children, title}) => {
  return (
    <div>
      <Header title={title}></Header>
      
      <Navigation></Navigation>

      <main>{children}</main>
      
      <Footer></Footer>
    </div>
  );
};

export default Layout;

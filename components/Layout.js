import React from "react";

import Navigation from "./ui/Navbar";
import Footer from "./ui/Footer"
import Header from "./ui/Header"

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

import React from "react";
import Navbar from "./Navbar";
import Header from "@/Components/Header";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;

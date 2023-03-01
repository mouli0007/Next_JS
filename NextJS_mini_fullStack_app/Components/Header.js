import React from "react";

import headerStyle from "@/styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>Web_Dev</span>News
      </h1>
      <p className={headerStyle.desc}>Keep Up-to-date with latest web development news</p>
    </div>
  );
};

export default Header;

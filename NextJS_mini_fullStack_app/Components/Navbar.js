import Link from "next/link";
import React from "react";
import navStyles from "@/styles/Nav.module.css";
Link;
const Navbar = () => {
  return (
    <div className={navStyles.container}>
      <Link className={navStyles.link_} href="/">
        Home
      </Link>
      <Link className={navStyles.link_} href="/about">
        About
      </Link>
      <Link className={navStyles.link_} href="/products">
        Products
      </Link>
      <Link className={navStyles.link_} href="/article">
        Article
      </Link>
    </div>
  );
};

export default Navbar;

import React from "react";
import Link from "next/link";
import navStyles from "@/styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <div className={navStyles.navbar}>
        <Link className={navStyles.links} href="/">
          Home
        </Link>
        <Link className={navStyles.links} href="/about">
          About
        </Link>
        <Link className={navStyles.links} href="/profile">
          Profile
        </Link>
        <Link className={navStyles.links} href="/coins">
          Coins Page
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

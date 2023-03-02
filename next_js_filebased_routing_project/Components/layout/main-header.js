import React from "react";
import Link from "next/link";
import header_styles from "../../styles/Main-Header.module.css";

const MainHeader = () => {
  return (
    <header className={header_styles.header}>
      <div className={header_styles.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={header_styles.navigation}>
        <ul>
          <li>
            <Link href="/events">All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

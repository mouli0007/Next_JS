import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <li>
          <Link className="link_" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link_" href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="link_" href="/client">
            Clients
          </Link>
        </li>
        <li>
          <Link className="link_" href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

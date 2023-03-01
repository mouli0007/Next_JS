import React from "react";
import Link from "next/link";
const products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link className="link_" href="/">
        Back To Home
      </Link>
    </div>
  );
};

export default products;

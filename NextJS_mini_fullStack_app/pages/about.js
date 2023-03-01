import React from "react";
import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";

const about = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <Link className="link_" href="/products">
        Products
      </Link>
    </div>
  );
};

export default about;

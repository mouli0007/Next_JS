import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("UseEffect Run !");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>404 page not found</title>
      </Head>
      <h1>404 Not found Check the page properly </h1>
      <br />
      <button>
        <Link href="/">Back TO Home Page</Link>
      </button>

      <img src="" alt="" />
      <br />
    </div>
  );
};

export default ErrorPage;

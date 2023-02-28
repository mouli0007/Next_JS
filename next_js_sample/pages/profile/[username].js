import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
const Username = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <Head>
        <title>Welcome {username }</title>
      </Head>
      <h1>Hi {username}</h1>
      <Link href="/"> Home</Link>
    </div>
  );
};

export default Username;

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config/index";
const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link className="link_" href="/article">
        Back To Article
      </Link>
      <br />

      <Link className="link_" href="/">
        Home
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

// Getting Static Paths !

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const article = await res.json();

  // Getting the Array of article id
  const ids = article.map((article) => article.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// // Getting Static Paths !

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const article = await res.json();

//   // Getting the Array of article id
//   const ids = article.map((article) => article.id);

//   const paths = ids.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;

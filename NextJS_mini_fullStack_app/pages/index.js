import Head from "next/head";
import ArticleList from "@/Components/ArticleList";
import { server } from "../config/index";
export default function Home({ articles }) {
  const articles_ = articles.slice(0, 5);
  return (
    <div>
      <Head>
        <title>Web_Dev News</title>
        <meta name="keywords" content="Web_Development Programming" />
      </Head>

      <ArticleList articles={articles_} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getServerSideProps = async () => {
//   const url = " https://jsonplaceholder.typicode.com/posts";

//   const response = await fetch(url);
//   const articles = await response.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

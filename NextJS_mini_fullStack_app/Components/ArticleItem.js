import React from "react";
import articlesStyles from "@/styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  const { title, id, body } = article;
  return (
    <Link className="link_" href="/article/[id]" as={`/article/${id}`}>
      <h3>{title} &rarr;</h3>
      <p>{body}</p>
    </Link>
  );
};

export default ArticleItem;

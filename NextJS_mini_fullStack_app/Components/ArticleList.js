import React from "react";
import articlesStyles from "@/styles/Article.module.css";
import ArticleItem from "./ArticleItem";
const ArticleList = ({ articles }) => {
  return (
    <div className={articlesStyles.grid}>
      {articles.map((article) => {
        return <ArticleItem article={article} />;
      })}
    </div>
  );
};

export default ArticleList;

import React from "react";
import { useSelector } from "react-redux";

import Article from "./Article/Article";
import styles from "./Articles.module.css";
import { selectArticle } from "../../features/articleSlice";
import FullPageArticle from "./FullPageArticle/FullPageArticle";

const Articles = ({ articles }) => {
  const article = useSelector(selectArticle);
  return (
    <div className={styles.articles}>
      {article ? (
        <FullPageArticle />
      ) : (
        <>
          {articles?.map((article) => (
            <Article article={article} />
          ))}
        </>
      )}
    </div>
  );
};

export default Articles;

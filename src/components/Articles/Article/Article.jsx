import React from "react";
import { useDispatch } from "react-redux";

import Button from "../../../UI/Button/Button";
import styles from "./Article.module.css";
import { addarticle } from "../../../features/articleSlice";

const Article = ({ article }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.article}>
      <h6>{article?.data.displayName}</h6>
      <p>{article?.data.shortdescription}</p>
      <p className={styles.dateandtime}>12th March 2021</p>
      <Button
        title="Read More"
        onclick={() => {
          dispatch(addarticle(article));
        }}
      />
    </div>
  );
};

export default Article;

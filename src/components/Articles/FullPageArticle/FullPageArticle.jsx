import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./FullPageArticle.module.css";
import { selectArticle, removearticle } from "../../../features/articleSlice";
import Button from "../../../UI/Button/Button";

const FullPageArticle = ({ addclap }) => {
  const article = useSelector(selectArticle);
  const dispatch = useDispatch();
  return (
    <div className={styles.fullpagearticle}>
      <div className={styles.username}>
        <p className={styles.bolder}>By:</p>
        <p>{article?.data.id}</p>
      </div>
      <div className={styles.timestamp}>
        <p className={styles.bolder}>Date:</p>
        <p>Timestamp</p>
      </div>
      <div className={styles.title}>
        <p className={styles.bolder}>Title:</p>
        <p>{article?.data.shortdescription}</p>
      </div>
      <div className={styles.content}>
        <p className={styles.bolder}>Story:</p>
        <p>{article?.data.message}</p>
      </div>
      <Button title="Clap!" onclick={() => addclap(article?.id)} />
      <Button title="Done!" onclick={() => dispatch(removearticle())} />
    </div>
  );
};

export default FullPageArticle;

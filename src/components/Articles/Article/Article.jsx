import React from "react";
import { useDispatch } from "react-redux";

import Button from "../../../UI/Button/Button";
import styles from "./Article.module.css";
import { addarticle } from "../../../features/articleSlice";
import clap from "../../../assets/svgs/claps.png";

const Article = ({ article }) => {
  console.log(article);
  const dispatch = useDispatch();
  return (
    <div className={styles.article}>
      <h6>{article?.data.id}</h6>
      <p>{article?.data.shortdescription}</p>
      <p className={styles.dateandtime}>
        {" "}
        {
          new Date(article?.data?.timestamp?.seconds * 1000)
            .toUTCString()
            .split("2021")[0]
        }
        2021{" "}
      </p>
      <div className={styles.claps}>
        <img src={clap} />
        <p>{article?.data.claps}</p>
      </div>
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

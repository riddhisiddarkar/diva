import React from "react";
import { useSelector } from "react-redux";

import Article from "./Article/Article";
import styles from "./Articles.module.css";
import { selectArticle } from "../../features/articleSlice";
import FullPageArticle from "./FullPageArticle/FullPageArticle";
import { selectMessage } from "../../features/messageSlice";
import { selectChannel } from "../../features/channelSlice";
import { db } from "../../firebase";

const Articles = ({ articles }) => {
  const article = useSelector(selectArticle);
  const channel = useSelector(selectChannel);
  const message = useSelector(selectMessage);

  const addclap = (id) => {
    db.collection(channel?.type)
      .doc(channel?.name)
      .collection(channel?.name)
      .doc(id)
      .get()
      .then((res) => {
        db.collection(channel?.type)
          .doc(channel?.name)
          .collection(channel?.name)
          .doc(id)
          .update({
            ...res.data(),
            claps: res.data().claps + 1,
          })
          .then((r) => {
            console.log("Added clap");
          })
          .catch((error) => {
            console.log("There is an error in adding a clap");
            console.log(error);
          });
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <div className={styles.articles}>
      {article ? (
        <FullPageArticle addclap={addclap} />
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

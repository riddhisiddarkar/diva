import React from "react";
import Advice from "./Advice/Advice";

import styles from "./Advices.module.css";

const Advices = ({ comments, like, dislike }) => {
  console.log(comments);
  return (
    <div className={styles.advices}>
      {comments?.map((comment) => (
        <Advice data={comment} like={like} dislike={dislike} key={comment.id} />
      ))}
    </div>
  );
};

export default Advices;

import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

import styles from "./Advice.module.css";
const Advice = ({ data, like, dislike }) => {
  console.log(data);
  return (
    <div className={styles.advice}>
      <p>{data?.data?.comment}</p>
      <div className={styles.advice_like_dislike}>
        <div>
          <ThumbUpOutlinedIcon
            className={styles.like}
            onClick={() => like(data?.id)}
          />
          <p>{data?.data?.likes}</p>
        </div>
        <div>
          <ThumbDownOutlinedIcon
            className={styles.dislike}
            onClick={() => dislike(data?.id)}
          />
          <p>{data?.data?.dislikes}</p>
        </div>
      </div>
      <p className={styles.timestamp}>
        {" "}
        {new Date(data?.data?.timestamp?.seconds * 1000).toUTCString()}
      </p>
    </div>
  );
};

export default Advice;

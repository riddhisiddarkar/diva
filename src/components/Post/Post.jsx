import React from "react";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";

import styles from "./Post.module.css";

const Post = () => {
  return (
    <>
      <div className={styles.post}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae cumque
          iure explicabo blanditiis magni voluptatum, adipisci vitae veritatis
          saepe harum, inventore non beatae nihil itaque.
        </p>
        <ForumRoundedIcon className={styles.chat_icon} />
        <p className={styles.timestamp}>a few moments ago</p>
      </div>
    </>
  );
};

export default Post;

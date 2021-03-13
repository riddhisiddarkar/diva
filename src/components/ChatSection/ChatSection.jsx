import React from "react";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";

import styles from "./ChatSection.module.css";
import Post from "../Post/Post";
const ChatSection = () => {
  return (
    <div className={styles.chatSection}>
      <div className={styles.chatSection_navbar}>
        <p>Section Name</p>
        <AddBoxRoundedIcon />
      </div>
      <div className={styles.chats}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default ChatSection;

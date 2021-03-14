import React, { useState, useEffect } from "react";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { useSelector } from "react-redux";

import styles from "./ChatSection.module.css";
import Post from "../Post/Post";
import { selectChannel } from "../../features/channelSlice";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const ChatSection = () => {
  const channel = useSelector(selectChannel);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (channel) {
      db.collection(channel?.type)
        .doc(channel?.name)
        .collection(channel?.name)
        .orderBy("timestamp")
        .onSnapshot((snapShot) =>
          setPosts(
            snapShot.docs.map((snap) => ({
              data: snap.data(),
              id: snap.id,
            }))
          )
        );
    }
  }, [channel]);
  return (
    <div className={styles.chatSection}>
      <div className={styles.chatSection_navbar}>
        <p>Section Name</p>
        <Link to="/addpost">
          <AddBoxRoundedIcon />
        </Link>
      </div>
      <div className={styles.chats}>
        {posts.map((post) => (
          <Post data={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default ChatSection;

import React, { useState, useEffect } from "react";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { useSelector } from "react-redux";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";

import styles from "./ChatSection.module.css";
import Post from "../Post/Post";
import { selectChannel } from "../../features/channelSlice";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Articles from "../Articles/Articles";
import DoctorContacts from "../DoctorContacts/DoctorContacts";

const ChatSection = ({ sidebarclose }) => {
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
  console.log(posts);
  return (
    <div className={styles.chatSection}>
      <div className={styles.chatSection_navbar}>
        <KeyboardBackspaceOutlinedIcon
          className={styles.backbtn}
          onClick={() => sidebarclose(true)}
        />
        <p>{channel?.name}</p>
        {(channel?.type === "discussion" || channel?.name === "yourself") && (
          <Link to="/addpost">
            <AddBoxRoundedIcon />
          </Link>
        )}
      </div>
      <div className={styles.chats}>
        {channel?.type == "discussion" ? (
          <>
            {posts.map((post) => (
              <Post data={post} key={post.id} />
            ))}
          </>
        ) : channel?.type == "celebration" ? (
          <Articles articles={posts} />
        ) : channel?.type == "disect" ? (
          <DoctorContacts />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ChatSection;

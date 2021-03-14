import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import { useHistory } from "react-router-dom";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import firebase from "firebase";

import styles from "./Forum.module.css";
import { selectMessage } from "../../features/messageSlice";
import { selectChannel } from "../../features/channelSlice";
import { selectUser } from "../../features/appSlice";
import MainMessage from "./MainMessage/MainMessage";
import Advices from "../Advices/Advices";
import { db } from "../../firebase";

const Forum = () => {
  const user = useSelector(selectUser);
  const channel = useSelector(selectChannel);
  const message = useSelector(selectMessage);
  const history = useHistory();
  const [input, setInput] = useState("");

  console.log(user);
  console.log(message);
  console.log(channel);

  const addcomment = (e) => {
    e.preventDefault();
    console.log(input);
    db.collection(channel?.type)
      .doc(channel?.name)
      .collection(channel?.name)
      .doc(message?.id)
      .collection("comments")
      .add({
        comment: input,
        user: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        dislikes: 0,
      })
      .then((res) => {
        console.log("Successfully added a comment");
        console.log(res);
      })
      .catch((err) => {
        console.log("There is an error here in adding a comment");
        console.log(err);
      });
  };
  useEffect(() => {
    if (!message) history.push("/app");
  }, [message]);

  return (
    <div className={styles.forum}>
      <div className={styles.forum_navbar}>
        <KeyboardBackspaceRoundedIcon
          className={styles.keyboardback}
          onClick={() => history.push("/app")}
        />
        <p className={styles.forum_channel_name}>{channel?.type}</p>
      </div>
      <MainMessage data={message?.message} />
      <Advices />
      <form className={styles.textinput} onSubmit={addcomment}>
        <input
          type="text"
          placeholder="Type ...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"></button>
        <SendRoundedIcon className={styles.sendicon} onClick={addcomment} />
      </form>
    </div>
  );
};

export default Forum;

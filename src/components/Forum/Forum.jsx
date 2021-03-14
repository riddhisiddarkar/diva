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
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

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
    else {
      db.collection(channel?.type)
        .doc(channel?.name)
        .collection(channel?.name)
        .doc(message?.id)
        .collection("comments")
        .orderBy("timestamp")
        .onSnapshot((snapshot) =>
          setComments(
            snapshot.docs.map((snap) => ({
              id: snap.id,
              data: snap.data(),
            }))
          )
        );
    }
  }, [message, channel?.type, history, channel?.name]);
  const addlike = (id) => {
    db.collection(channel?.type)
      .doc(channel?.name)
      .collection(channel?.name)
      .doc(message?.id)
      .collection("comments")
      .doc(id)
      .get()
      .then((res) => {
        db.collection(channel?.type)
          .doc(channel?.name)
          .collection(channel?.name)
          .doc(message?.id)
          .collection("comments")
          .doc(id)
          .update({ ...res.data(), likes: res.data().likes + 1 })
          .then((r) => {
            console.log(r);
            console.log("Successfully added data");
          })
          .catch((err) => {
            console.log("There is an error here in adding likes");
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const adddislike = (id) => {
    db.collection(channel?.type)
      .doc(channel?.name)
      .collection(channel?.name)
      .doc(message?.id)
      .collection("comments")
      .doc(id)
      .get()
      .then((res) => {
        db.collection(channel?.type)
          .doc(channel?.name)
          .collection(channel?.name)
          .doc(message?.id)
          .collection("comments")
          .doc(id)
          .update({ ...res.data(), dislikes: res.data().dislikes + 1 })
          .then((r) => {
            console.log("Successfully added data");
          })
          .catch((err) => {
            console.log("There is an error here in adding likes");
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      <Advices comments={comments} like={addlike} dislike={adddislike} />
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

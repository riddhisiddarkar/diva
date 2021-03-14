import React, { useState } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

import styles from "./AddAPost.module.css";
import addpic from "../../assets/svgs/addpost.svg";
import Button from "../../UI/Button/Button";
import { selectChannel } from "../../features/channelSlice";
import { selectUser } from "../../features/appSlice";
import { db } from "../../firebase";

const AddAPost = () => {
  const [message, setMessage] = useState("");
  const channel = useSelector(selectChannel);
  const user = useSelector(selectUser);
  const history = useHistory();

  const addpost = (e) => {
    e.preventDefault();
    if (channel) {
      db.collection(channel?.type)
        .doc(channel?.name)
        .collection(channel?.name)
        .add({
          message: message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((res) => {
          console.log("Successfully added the post ");
          console.log(res);
          db.collection("users")
            .doc(user?.email)
            .collection("sentposts")
            .add({
              id: res.id,
              message: message,
              type: channel.type,
              name: channel.name,
            })
            .then((r) => {
              console.log(r);
              history.push("/app");
            })
            .catch((err) => {
              console.log(
                "There is an error here in adding data to the db with user"
              );
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          console.log("There is an issue here in adding the post to the db");
        });
    }
  };

  return (
    <div className={styles.addapost}>
      <img src={addpic} className={styles.addpic} alt="addpost" />
      <form>
        <textarea
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button title="Submit" type="submit" onclick={addpost} />
      </form>
    </div>
  );
};

export default AddAPost;

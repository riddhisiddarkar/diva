import React from "react";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./Post.module.css";
import { addMessage } from "../../features/messageSlice";

const Post = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  //   console.log(data?.data?.timestamp.seconds);
  const enterdiscussion = () => {
    dispatch(
      addMessage({
        id: data.id,
        message: data.data,
      })
    );
    history.push("/app/forum");
  };
  return (
    <>
      <div className={styles.post}>
        <p className={styles.username}>{data?.data.id}</p>
        <p>{data.data.message}</p>
        <ForumRoundedIcon
          className={styles.chat_icon}
          onClick={enterdiscussion}
        />
        <p className={styles.timestamp}>
          {new Date(data?.data?.timestamp?.seconds * 1000).toUTCString()}
        </p>
      </div>
    </>
  );
};

export default Post;

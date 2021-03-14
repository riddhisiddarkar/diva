import React from "react";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./Post.module.css";
import { addMessage } from "../../features/messageSlice";

const Post = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

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
        <p>{data.data.message}</p>
        <ForumRoundedIcon
          className={styles.chat_icon}
          onClick={enterdiscussion}
        />
        <p className={styles.timestamp}>a few moments ago</p>
      </div>
    </>
  );
};

export default Post;

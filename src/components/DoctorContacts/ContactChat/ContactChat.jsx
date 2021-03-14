import React, { useState } from "react";

import styles from "./ContactChat.module.css";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const ContactChat = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const addmessage = (e) => {
    e.preventDefault();
    setMessage([...message, input]);
    console.log(message);
    setInput("");
  };
  return (
    <div className={styles.chatpage}>
      <div>
        {message.map((m) => (
          <div className={styles.message}>
            <p>{m}</p>
          </div>
        ))}
      </div>
      <form className={styles.textinput} onSubmit={addmessage}>
        <input
          type="text"
          placeholder="Type ...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"></button>
        <SendRoundedIcon className={styles.sendicon} onClick={addmessage} />
      </form>
    </div>
  );
};

export default ContactChat;

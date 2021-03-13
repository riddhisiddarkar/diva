import React from "react";

import styles from "./Button.module.css";

const Button = ({ type, title, onclick }) => {
  return (
    <button type={type} className={styles.button} onClick={onclick}>
      {title}
    </button>
  );
};

export default Button;

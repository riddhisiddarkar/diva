import React from "react";

import styles from "./Input.module.css";

const Input = ({ type, placeholder, onclick }) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.input} />
  );
};

export default Input;

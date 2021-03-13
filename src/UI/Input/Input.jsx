import React from "react";

import styles from "./Input.module.css";

const Input = ({ type, placeholder, onchange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onchange}
    />
  );
};

export default Input;

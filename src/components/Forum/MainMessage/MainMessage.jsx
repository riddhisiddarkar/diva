import React from "react";

import styles from "./MainMessage.module.css";

const MainMessage = ({ data }) => {
  return <div className={styles.mainmessage}>{data?.message}</div>;
};

export default MainMessage;

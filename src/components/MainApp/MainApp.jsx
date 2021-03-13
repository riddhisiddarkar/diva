import React from "react";
import ChatSection from "../ChatSection/ChatSection";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./MainApp.module.css";

const MainApp = () => {
  return (
    <div className={styles.mainapp}>
      <Sidebar />
      <div className={styles.chatsection}>
        <ChatSection />
      </div>
    </div>
  );
};

export default MainApp;

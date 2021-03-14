import React, { useState } from "react";
import ChatSection from "../ChatSection/ChatSection";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./MainApp.module.css";

const MainApp = () => {
  const [sidebaropen, setSidebaropen] = useState(true);
  return (
    <div className={styles.mainapp}>
      <Sidebar open={sidebaropen} sidebarclose={setSidebaropen} />
      <div className={styles.chatsection}>
        <ChatSection sidebarclose={setSidebaropen} />
      </div>
    </div>
  );
};

export default MainApp;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ChatSection from "../ChatSection/ChatSection";
import Sidebar from "../Sidebar/Sidebar";
import { selectUser } from "../../features/appSlice";
import styles from "./MainApp.module.css";

const MainApp = () => {
  const [sidebaropen, setSidebaropen] = useState(true);
  const history = useHistory();
  const user = useSelector(selectUser);
  useEffect(() => {
    if (!user) history.push("/");
  }, [user, history]);
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

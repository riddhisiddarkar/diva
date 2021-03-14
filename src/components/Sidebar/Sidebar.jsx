import React from "react";

import styles from "./Sidebar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import SidebarBigComponent from "./SidebarBigComponent/SidebarBigComponent";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_name_section1}>
        <MenuIcon className={styles.sidebar_menuicon} />
        <h2 className={styles.sideapp_name}>App Name</h2>
      </div>
      <div className={styles.sidebar_name_section2}>
        {/* <p>Username</p> */}
      </div>
      <div>
        <SidebarBigComponent
          title="Lets Discuss "
          data={["mental", "sexual"]}
          type="discussion"
        />
        <SidebarBigComponent
          title="Lets Celebrate "
          data={["yourself", "others"]}
          type="celebration"
        />
        <SidebarBigComponent
          title="Lets Disect  "
          data={["gynac", "therapist", "pediatrician"]}
          type="disect"
        />
      </div>
    </div>
  );
};

export default Sidebar;

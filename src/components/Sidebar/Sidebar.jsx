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
        <p>Username</p>
      </div>
      <div>
        <SidebarBigComponent
          title="Lets Discuss "
          data={["Mental", "Sexual"]}
        />
        <SidebarBigComponent
          title="Lets Celebrate "
          data={["Yourself", "Others"]}
        />
        <SidebarBigComponent
          title="Lets Disect  "
          data={["Gynac", "Therapist", "Pediatrician"]}
        />
      </div>
    </div>
  );
};

export default Sidebar;

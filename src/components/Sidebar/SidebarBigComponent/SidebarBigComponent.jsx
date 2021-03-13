import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import styles from "./SidebarBigComponent.module.css";
import SidebarSmallerOption from "./SidebarSmallerOption/SidebarSmallerOption";

const SidebarBigComponent = ({ title, data }) => {
  return (
    <div className={styles.sidebarbigoption}>
      <div>
        <p>{title} </p> <KeyboardArrowDownIcon />
      </div>
      <>
        <SidebarSmallerOption data={data} />
      </>
    </div>
  );
};

export default SidebarBigComponent;

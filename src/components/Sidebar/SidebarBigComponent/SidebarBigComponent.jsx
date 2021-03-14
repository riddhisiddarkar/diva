import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import styles from "./SidebarBigComponent.module.css";
import SidebarSmallerOption from "./SidebarSmallerOption/SidebarSmallerOption";

const SidebarBigComponent = ({ title, data, type }) => {
  return (
    <div className={styles.sidebarbigoption}>
      <div className={styles.sidebarbigoption_contianer}>
        <p>{title} </p> <KeyboardArrowDownIcon className={styles.downarrow} />
      </div>
      <>
        <SidebarSmallerOption data={data} type={type} />
      </>
    </div>
  );
};

export default SidebarBigComponent;
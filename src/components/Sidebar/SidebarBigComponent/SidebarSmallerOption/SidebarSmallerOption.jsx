import React from "react";
import { Link } from "react-router-dom";

import styles from "./SidebarSmallerOption.module.css";

const SidebarSmallerOption = ({ data }) => {
  return (
    <div className={styles.sidebarsmalleroption}>
      {data?.map((d) => (
        <Link>{d}</Link>
      ))}
    </div>
  );
};

export default SidebarSmallerOption;

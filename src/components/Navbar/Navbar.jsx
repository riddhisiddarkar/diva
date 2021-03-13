import React from "react";

import navbg from "../../assets/svgs/wave.svg";
import styles from "./Navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div>
      <img src={navbg} alt="navbg" className={styles.navbar_bg} />
      <MenuIcon className={styles.menuicon} />
      <Sidebar />
    </div>
  );
};

export default Navbar;

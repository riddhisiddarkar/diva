import React from "react";

import navbg from "../../assets/svgs/wave.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <img src={navbg} alt="navbg" className={styles.navbar} />
    </div>
  );
};

export default Navbar;

import React from "react";

import styles from "./Home.module.css";
import homelady from "../../assets/svgs/messaging_lady.svg";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_section}>
        <div className={styles.homepage_details}>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button className={styles.homepage_button}>Join us</button>
        </div>
        <img src={homelady} className={styles.homepage_image} />
      </div>
    </div>
  );
};

export default Home;

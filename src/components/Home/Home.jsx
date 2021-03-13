import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Home.module.css";
import homelady from "../../assets/svgs/messaging_lady.svg";
import Button from "../../UI/Button/Button";

const Home = () => {
  const history = useHistory();

  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_section}>
        <div className={styles.homepage_details}>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <Button title="Join Us" onclick={() => history.push("/login")} />
        </div>
        <img
          src={homelady}
          className={styles.homepage_image}
          alt="homepage diva"
        />
      </div>
    </div>
  );
};

export default Home;

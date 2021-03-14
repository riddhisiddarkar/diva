import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Home.module.css";
import homelady from "../../assets/svgs/messaging_lady.svg";
import Button from "../../UI/Button/Button";
import Navbar from "../Navbar/Navbar";
import security from "../../assets/svgs/security.svg";
import inspiration from "../../assets/svgs/inspiration.svg";
import certified from "../../assets/svgs/certified.svg";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Navbar />
      <div className={styles.homepage}>
        <div className={styles.homepage_section}>
          <div className={styles.homepage_details}>
            <h2>Diva</h2>
            <p>Amazing things happen when woman help woman</p>
            <Button title="Join Us" onclick={() => history.push("/login")} />
          </div>
          <img
            src={homelady}
            className={styles.homepage_image}
            alt="homepage diva"
          />
        </div>
      </div>
      <h1 className={styles.heading}>Features</h1>
      <div className={styles.best}>
        <div className={styles.feature}>
          <img src={security} />
          <p>Protecting Identity</p>
        </div>
        <div className={styles.feature}>
          <img src={certified} />
          <p>Certified Help</p>
        </div>
        <div className={styles.feature}>
          <img src={inspiration} />
          <p>Connecting with fellows</p>
        </div>
      </div>
      <footer className={styles.footer}>
        Made with love for all the wonderful women by Riddhi Siddarkar 💗{" "}
      </footer>
    </>
  );
};

export default Home;

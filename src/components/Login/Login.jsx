import React from "react";

import styles from "./Login.module.css";
import loginsvg from "../../assets/svgs/login.svg";

const Login = () => {
  return (
    <div className={styles.login}>
      <form>
        <input typ="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <img src={loginsvg} className={styles.loginimg} />
    </div>
  );
};

export default Login;

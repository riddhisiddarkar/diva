import React from "react";

import styles from "./Login.module.css";
import loginsvg from "../../assets/svgs/login.svg";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Login = () => {
  return (
    <div className={styles.login}>
      <form>
        <Input typ="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" title="Login" />
      </form>
      <img src={loginsvg} className={styles.loginimg} alt="login" />
    </div>
  );
};

export default Login;

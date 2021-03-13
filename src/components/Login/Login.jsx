import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import loginsvg from "../../assets/svgs/login.svg";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginuser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("Successfully logged in user");
        console.log(res);
      })
      .catch((err) => {
        console.log("There is an error here in signing in the user");
        console.log(err);
        if (err.code === "auth/user-not-found") alert("Email not registered");
        if (err.code === "auth/wrong-password") alert("Incorrect password");
      });
  };

  return (
    <div className={styles.login}>
      <form>
        <h1 className={styles.logintext}>Login</h1>
        <Input
          typ="email"
          placeholder="Email"
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" title="Login" onclick={loginuser} />
        <p className={styles.loginaccount}>
          Don't have an account?{"    "}
          <Link to="/register" className={styles.logintext}>
            Create account
          </Link>
        </p>
      </form>
      <img src={loginsvg} className={styles.loginimg} alt="login" />
    </div>
  );
};

export default Login;

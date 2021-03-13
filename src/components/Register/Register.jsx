import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Register.module.css";
import registerImage from "../../assets/svgs/register.svg";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { auth } from "../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const registeruser = (e) => {
    e.preventDefault();
    if (password !== cpassword) alert("Passwords donot match");
    else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          res.user
            .updateProfile({
              displayName: `user#${Math.round(Math.random() * 100000)}`,
            })
            .then((r) => {
              console.log("Successfully updated profile");
              console.log(r);
            })
            .catch((err) => {
              console.log("There is an error here in updating the username");
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(
            "There is an error here in creating an account for the user"
          );
          console.log(err);
        });
    }
  };

  return (
    <div className={styles.register}>
      <form>
        <h1 className={styles.registertext}>Create User</h1>
        <Input
          type="email"
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={cpassword}
          onchange={(e) => setCpassword(e.target.value)}
        />
        <Button title="Register" type="submit" onclick={registeruser} />
        <p className={styles.loginaccount}>
          Already have an account?{"    "}
          <Link to="/login" className={styles.registertext}>
            Login
          </Link>
        </p>
      </form>
      <img
        src={registerImage}
        alt="register"
        className={styles.register_image}
      />
    </div>
  );
};

export default Register;

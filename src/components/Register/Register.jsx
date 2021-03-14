import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Register.module.css";
import registerImage from "../../assets/svgs/register.svg";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { auth, db } from "../../firebase";
import { selectUser, login } from "../../features/appSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (user) history.push("/app");
  }, [history, user]);

  const registeruser = (e) => {
    e.preventDefault();
    if (password !== cpassword) alert("Passwords donot match");
    else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          const newuserid = Math.round(Math.random() * 100000);
          res.user
            .updateProfile({
              displayName: `user#${newuserid}`,
            })
            .then((r) => {
              db.collection("users")
                .doc(res.user.email)
                .set({
                  displayName: `user#${newuserid}`,
                  uid: res.user.uid,
                })
                .then(() => {
                  console.log("Successfully added user to db");
                  dispatch(
                    login({
                      displayName: `user#${newuserid}`,
                      uid: res.user.uid,
                      email: res.user.email,
                    })
                  );
                })
                .catch((err) => {
                  console.log(
                    "There is an error here in adding the user to db"
                  );
                  console.log(err);
                });
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
          if (err.code === "auth/weak-password")
            alert("Password should be min of 6 chars");
          if (err.code === "auth/email-already-in-use")
            alert("Account already exists");
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

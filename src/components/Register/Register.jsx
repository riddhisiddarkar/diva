import React from "react";

import styles from "./Register.module.css";
import registerImage from "../../assets/svgs/register.svg";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Register = () => {
  return (
    <div className={styles.register}>
      <form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button title="Register" type="submit" />
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

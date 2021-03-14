import React from "react";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";

import styles from "./EachContact.module.css";
import { addContact } from "../../../features/contactSlice";

const EachContact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.eachcontact}>
      <div>
        <p>
          Name:
          <span>
            {"   "}
            {contact.name}
          </span>
        </p>
        <p>
          Years of experience:{"   "}
          <span>{contact.yearsOfExperience}</span>
        </p>
      </div>
      <Button title="Connect" onclick={() => dispatch(addContact(contact))} />
    </div>
  );
};

export default EachContact;

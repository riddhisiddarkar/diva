import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import EachContact from "./EachContact/EachContact";
import gynaccontacts from "./gynacdata";
import therapycontact from "./therapistdata";
import pedia from "./pediatriciandata";
import { useSelector } from "react-redux";
import { selectChannel } from "../../features/channelSlice";
import { selectContact } from "../../features/contactSlice";
import ContactChat from "./ContactChat/ContactChat";

const DoctorContacts = () => {
  const channel = useSelector(selectChannel);
  const contact = useSelector(selectContact);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    console.log(channel);
    if (channel?.name.trim() == "pediatrician") setContacts(pedia);
    if (channel?.name == "therapist") setContacts(therapycontact);
    else setContacts(gynaccontacts);
  }, [channel]);

  return (
    <>
      {contact ? (
        <ContactChat />
      ) : (
        <>
          {contacts.map((contact) => (
            <EachContact contact={contact} />
          ))}
        </>
      )}
    </>
  );
};

export default DoctorContacts;

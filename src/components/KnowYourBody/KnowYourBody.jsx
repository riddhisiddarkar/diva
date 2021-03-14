import React from "react";
import Button from "../../UI/Button/Button";

import styles from "./KnowYourBody.module.css";
const KnowYourBody = () => {
  const data = [
    "What does Your Body need",
    "Health Bits",
    "How do we have periods",
  ];
  return (
    <>
      {data.map((d) => (
        <div className={styles.eachcontact}>
          <div>
            <p>
              Name:
              <span>
                {"   "}
                {d}
              </span>
            </p>
          </div>
          <Button title="Watch" />
        </div>
      ))}
    </>
  );
};

export default KnowYourBody;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./SidebarSmallerOption.module.css";
import { addChannel } from "../../../../features/channelSlice";

const SidebarSmallerOption = ({ data, type }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebarsmalleroption}>
      {data?.map((d) => (
        <Link
          onClick={() => {
            dispatch(
              addChannel({
                type: type,
                name: d,
              })
            );
          }}
        >
          {d}
        </Link>
      ))}
    </div>
  );
};

export default SidebarSmallerOption;

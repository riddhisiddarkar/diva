import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SidebarSmallerOption.module.css";
import { addChannel, selectChannel } from "../../../../features/channelSlice";

const SidebarSmallerOption = ({ data, type, sidebarclose }) => {
  const dispatch = useDispatch();
  const channel = useSelector(selectChannel);

  return (
    <div className={styles.sidebarsmalleroption}>
      {data?.map((d) => (
        <Link
          style={{
            background: `${channel?.name === d ? "aliceblue" : ""}`,
            color: `${channel?.name === d ? "#1d1da1" : ""}`,
          }}
          onClick={() => {
            dispatch(
              addChannel({
                type: type,
                name: d,
              })
            );
            if (window.innerWidth < 700) sidebarclose(false);
          }}
        >
          {d}
        </Link>
      ))}
    </div>
  );
};

export default SidebarSmallerOption;

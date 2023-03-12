import React from "react";
import {useDictionaryContext} from "../../../../context/Context";
import {RoomBlock} from "../roomBlock/RoomBlock";
import styles from "./navigation.module.scss";


export const Navigation = () => {
  const {roomInfo} = useDictionaryContext().dictionary;

  return (
    <div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              href="#single"
              className={styles.link}
            >
              {roomInfo.singleRoomTitle}
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a
              href="#double"
              className={styles.link}
            >
              {roomInfo.doubleRoomTitle}
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a
              href="#twin"
              className={styles.link}
            >
              {roomInfo.twinRoomTitle}
            </a>
          </li>
        </ul>
      </nav>
      <RoomBlock />
    </div>
  );
};


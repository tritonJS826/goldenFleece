import React from "react";
import {useCurrentDictionaryContext} from "../../../../context/Context";
import {RoomBlock} from "../roomBlock/RoomBlock";
import styles from "./navigation.module.scss";


export const Navigation = () => {
  const {dictionary} = useCurrentDictionaryContext();


  return (
    <div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              href="#single"
              className={styles.link}
            >
              {dictionary.roomInfo.singleRoomTitle}
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
              {dictionary.roomInfo.doubleRoomTitle}
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
              {dictionary.roomInfo.twinRoomTitle}
            </a>
          </li>
        </ul>
      </nav>
      <RoomBlock />
    </div>
  );
};


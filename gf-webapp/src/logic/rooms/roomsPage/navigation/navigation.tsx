import React from "react";
import {useDictionaryContext} from "../../../../context/Context";
import {RoomBlock} from "../roomBlock/RoomBlock";
import styles from "./navigation.module.scss";


export const Navigation = () => {
  const {dictionary} = useDictionaryContext();
  const glossary = dictionary.roomInfo;


  return (
    <div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              href="#single"
              className={styles.link}
            >
              {glossary.singleRoomTitle}
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
              {glossary.doubleRoomTitle}
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
              {glossary.twinRoomTitle}
            </a>
          </li>
        </ul>
      </nav>
      <RoomBlock />
    </div>
  );
};


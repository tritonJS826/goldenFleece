import React from "react";
import styles from "./navigation.module.scss";
import {RoomBlock} from "../roomBlock/RoomBlock";
import {useCurrentLanguageContext} from "../../../../context/Context";

export const Navigation = () => {
  const {language} = useCurrentLanguageContext();


  return (
    <div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#single"
              className={styles.link}
            >
              {language.roomInfo.singleRoomTitle}
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a href="#double"
              className={styles.link}
            >
              {language.roomInfo.doubleRoomTitle}
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a href="#twin"
              className={styles.link}
            >
              {language.roomInfo.twinRoomTitle}
            </a>
          </li>
        </ul>
      </nav>
      <RoomBlock />
    </div>
  );
};


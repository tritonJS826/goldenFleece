import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./navigation.module.scss";
import imgPromo from "../../../../resources/rooms/rooms.jpg";
import {RoomBlock} from "../roomBlock/RoomBlock";

export const Navigation = () => {
  return (
    <div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#single"
              className={styles.link}
            >
              Single room
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a href="#double"
              className={styles.link}
            >
              Double room
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a href="#twin"
              className={styles.link}
            >
              Twin room
            </a>
          </li>
        </ul>
      </nav>
      <RoomBlock />
    </div>
  );
};


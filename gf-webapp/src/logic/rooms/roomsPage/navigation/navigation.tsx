import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./navigation.module.scss";
import imgPromo from "../../../../resources/rooms/rooms.jpg";
import {RoomBlock} from "../roomBlock/RoomBlock";
import {useTranslation} from "react-i18next";

export const Navigation = () => {
  const {t} = useTranslation();

  return (
    <div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#single"
              className={styles.link}
            >
              {t("singleRoom")}
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a href="#double"
              className={styles.link}
            >
              {t("doubleRoom")}
            </a>
          </li>
          <p className={styles.line}>
            |
          </p>
          <li className={styles.listItem}>
            <a href="#twin"
              className={styles.link}
            >
              {t("twinRoom")}
            </a>
          </li>
        </ul>
      </nav>
      <RoomBlock />
    </div>
  );
};


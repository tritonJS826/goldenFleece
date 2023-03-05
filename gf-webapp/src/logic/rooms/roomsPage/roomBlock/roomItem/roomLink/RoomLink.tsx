import React from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {RoomType} from "../../../../../../model/room";
import styles from "../roomItem.module.scss";

export const RoomLink = ({room}: RoomType) => {
  const {t} = useTranslation();
  return (
    <NavLink to={`/rooms/${room.id}`}
      className={styles.roomLink}
    >
      <span className={styles.linkText}>
        {t("readMore")}
      </span>
    </NavLink>
  );
};
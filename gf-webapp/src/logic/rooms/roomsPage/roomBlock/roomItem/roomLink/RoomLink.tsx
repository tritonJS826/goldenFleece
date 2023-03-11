import React from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {Room} from "../../../../../../model/Room";
import styles from "../roomItem.module.scss";

interface LinkProps {
  room: Room
}

export const RoomLink = (props: LinkProps) => {
  const {t} = useTranslation();
  return (
    <NavLink to={`/rooms/${props.room.id}`}
      className={styles.roomLink}
    >
      <span className={styles.linkText}>
        {t("readMore")}
      </span>
    </NavLink>
  );
};
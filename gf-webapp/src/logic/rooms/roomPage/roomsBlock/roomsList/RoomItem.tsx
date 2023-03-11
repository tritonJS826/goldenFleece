import React from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {Room} from "../../../../../model/Room";
import styles from "../roomsBlock.module.scss";

interface RoomItemProps {
  room: Room
}

export const RoomItem = (props: RoomItemProps) => {
  const {t} = useTranslation();
  return (
    <div key={props.room.id}
      className={styles.room}
    >
      <NavLink to={`/rooms/${props.room.id}`}
        className={({isActive}) =>
          isActive ? styles.link : undefined}
      >
        <img className={styles.roomImage}
          src={props.room.promo}
          alt="room"
        />
        <h3 className={styles.title3}>
          {t(`${props.room.apartmentsType.toLowerCase()}Room`)}
        </h3>
        <span className={styles.spanLink}>
          {t("More")}
        </span>
      </NavLink>
    </div>
  );
};
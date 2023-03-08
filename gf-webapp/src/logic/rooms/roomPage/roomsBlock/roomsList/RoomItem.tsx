import React from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {RoomType} from "../../../../../model/room";
import styles from "../roomsBlock.module.scss";

export const RoomItem = ({room}: RoomType) => {
  const {t} = useTranslation();
  return (
    <div key={room.id}
      className={styles.room}
    >
      <NavLink to={`/rooms/${room.id}`}
        className={({isActive}) =>
          isActive ? styles.link : undefined}
      >
        <img className={styles.roomImage}
          src={room.promo}
          alt="room"
        />
        <h3 className={styles.title3}>
          {t(`${room.apartmentsType.toLowerCase()}Room`)}
        </h3>
        <span className={styles.spanLink}>
          {t("More")}
        </span>
      </NavLink>
    </div>
  );
};
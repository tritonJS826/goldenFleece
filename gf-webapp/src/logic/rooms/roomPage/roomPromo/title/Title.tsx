import React from "react";
import {RoomType} from "../../../../../model/room";
import styles from "../roomPromo.module.scss";

export const Title = ({room}: RoomType) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.promo}
        src={room.promo}
        alt="Promo image"
      />
      <h1 className={styles.title}>
        {room.description}
      </h1>
    </div>
  );
};
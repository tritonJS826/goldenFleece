import React from "react";
import {Room} from "../../../../../model/Room";
import styles from "../roomPromo.module.scss";

interface TitleProps {
  room: Room
}

export const Title = (props: TitleProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.promo}
        src={props.room.promo}
        alt="Promo image"
      />
      <h1 className={styles.title}>
        {props.room.description}
      </h1>
    </div>
  );
};
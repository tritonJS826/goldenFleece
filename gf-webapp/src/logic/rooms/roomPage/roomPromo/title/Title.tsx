import React from "react";
import styles from "../RoomPromo.module.scss";

interface TitleProps {
  description: string;
  promoImgUrl: string;
}

export const Title = (props: TitleProps) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.promo}
        src={props.promoImgUrl}
        alt="Promo image"
      />
      <h1 className={styles.title}>
        {props.description}
      </h1>
    </div>
  );
};
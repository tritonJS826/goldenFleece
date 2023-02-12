import React from "react";
import styles from "./roomPromo.module.scss";

interface RoomPromo {
  promo: string,
  description: string,
  apartmentsType: string,
  price: number,
}

export const RoomPromo = (props: RoomPromo) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={props.promo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {props.description}
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          {`Apartment type: ${props.apartmentsType}`}
        </div>
        <div className={styles.description}>
          {`Price: ${props.price}$`}
        </div>
      </div>
    </div>
  );
};
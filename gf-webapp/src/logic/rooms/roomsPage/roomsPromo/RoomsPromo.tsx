import React from "react";
import styles from "./roomsPromo.module.scss";
import imgPromo from "../../../../resources/rooms/rooms.jpg";

export const RoomsPromo = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={imgPromo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          The Suites
        </h1>
      </div>
    </div>
  );
};
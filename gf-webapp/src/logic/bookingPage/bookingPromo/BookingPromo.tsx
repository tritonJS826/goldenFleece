import React from "react";
import styles from "./BookingPromo.module.scss";
import imgPromo from "../../../resources/rooms/rooms.jpg";

export const BookingPromo = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={imgPromo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          Booking
        </h1>
      </div>
    </div>
  );
};
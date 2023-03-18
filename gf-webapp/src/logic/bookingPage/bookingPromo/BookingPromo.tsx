import React from "react";
import {useDictionary} from "../../DictionaryContext/useDictionary";
import imgPromo from "../../../resources/rooms/rooms.jpg";
import styles from "./BookingPromo.module.scss";


export const BookingPromo = () => {
  const {bookingPage} = useDictionary().dictionary;

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.promo}
          src={imgPromo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {bookingPage.title}
        </h1>
      </div>
    </div>
  );
};
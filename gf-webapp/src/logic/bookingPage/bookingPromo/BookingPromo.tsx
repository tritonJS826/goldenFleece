import React from "react";
import styles from "./BookingPromo.module.scss";
import imgPromo from "../../../resources/rooms/rooms.jpg";
import {useCurrentLanguageContext} from "../../../context/Context";

export const BookingPromo = () => {
  const {language} = useCurrentLanguageContext();
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={imgPromo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {language.bookingPage.title}
        </h1>
      </div>
    </div>
  );
};
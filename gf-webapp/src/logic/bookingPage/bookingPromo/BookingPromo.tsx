import React from "react";
import styles from "./BookingPromo.module.scss";
import imgPromo from "../../../resources/rooms/rooms.jpg";
import {useTranslation} from "react-i18next";

export const BookingPromo = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={imgPromo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {t("booking")}
        </h1>
      </div>
    </div>
  );
};
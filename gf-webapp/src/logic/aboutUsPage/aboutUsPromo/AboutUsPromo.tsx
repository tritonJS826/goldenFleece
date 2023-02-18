import React from "react";
import styles from "./AboutUsPromo.module.scss";
import image from "../../../resources/sliderImages/Promo3.jpg";
import {useTranslation} from "react-i18next";

export const AboutUsPromo = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={image}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {t("about-us")}
        </h1>
      </div>
    </div>
  );
};
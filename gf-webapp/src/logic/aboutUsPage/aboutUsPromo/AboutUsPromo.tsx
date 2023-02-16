import React from "react";
import styles from "./AboutUsPromo.module.scss";
import image from "../../../resources/sliderImages/Promo3.jpg";

export const AboutUsPromo = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={image}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          About Us
        </h1>
      </div>
    </div>
  );
};
import React from "react";
import styles from "./AboutUsPromo.module.scss";
import image from "../../../resources/sliderImages/Promo3.jpg";
import {useCurrentDictionaryContext} from "../../../context/Context";


export const AboutUsPromo = () => {
  const {dictionary} = useCurrentDictionaryContext();

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.promo}
          src={image}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {dictionary.aboutUsPage.title}
        </h1>
      </div>
    </div>
  );
};
import React from "react";
import {useDictionaryContext} from "../../../context/Context";
import image from "../../../resources/sliderImages/Promo3.jpg";
import styles from "./AboutUsPromo.module.scss";


export const AboutUsPromo = () => {
  const {dictionary} = useDictionaryContext();
  const glossary = dictionary.aboutUsPage;

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.promo}
          src={image}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {glossary.title}
        </h1>
      </div>
    </div>
  );
};
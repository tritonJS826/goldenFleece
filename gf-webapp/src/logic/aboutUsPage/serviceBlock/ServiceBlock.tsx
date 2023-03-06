import React from "react";
import {useCurrentDictionaryContext} from "../../../context/Context";
import image from "../../../resources/sliderImages/Promo3.jpg";
import styles from "./ServiceBlock.module.scss";


export const ServiceBlock = () => {
  const {dictionary} = useCurrentDictionaryContext();

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.promo}
          src={image}
          alt="Promo image"
        />
        <div className={styles.about}>
          <div className={styles.over}>
            <p className={styles.textLeft}>
              <span className={styles.span}>
                {dictionary.aboutUsPage.subtitle}
              </span>
            </p>
            <h2 className={styles.title}>
              {dictionary.aboutUsPage.gastronomy}
            </h2>
            <div className={styles.description}>
              {dictionary.aboutUsPage.gastronomyDescription}
            </div>
            <h2 className={styles.title}>
              {dictionary.aboutUsPage.experience}
            </h2>
            <div className={styles.description}>
              {dictionary.aboutUsPage.experienceDescription}
            </div>
            <h3 className={styles.title}>
              {dictionary.aboutUsPage.spa}
            </h3>
            <div className={styles.description}>
              {dictionary.aboutUsPage.spaDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
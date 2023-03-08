import React from "react";
import {useDictionaryContext} from "../../../context/Context";
import image from "../../../resources/sliderImages/Promo3.jpg";
import styles from "./ServiceBlock.module.scss";


export const ServiceBlock = () => {
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
        <div className={styles.about}>
          <div className={styles.over}>
            <p className={styles.textLeft}>
              <span className={styles.span}>
                {glossary.subtitle}
              </span>
            </p>
            <h2 className={styles.title}>
              {glossary.gastronomy}
            </h2>
            <div className={styles.description}>
              {glossary.gastronomyDescription}
            </div>
            <h2 className={styles.title}>
              {glossary.experience}
            </h2>
            <div className={styles.description}>
              {glossary.experienceDescription}
            </div>
            <h3 className={styles.title}>
              {glossary.spa}
            </h3>
            <div className={styles.description}>
              {glossary.spaDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
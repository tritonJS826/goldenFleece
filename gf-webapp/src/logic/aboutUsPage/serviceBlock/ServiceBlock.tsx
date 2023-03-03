import React from "react";
import styles from "./ServiceBlock.module.scss";
import image from "../../../resources/sliderImages/Promo3.jpg";
import {useCurrentLanguageContext} from "../../../context/Context";


export const ServiceBlock = () => {
  const {language} = useCurrentLanguageContext();

  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.promo}
          src={image}
          alt="Promo image"
        />
        <div className={styles.about}>
          <div className={styles.over}>
            <p className={styles.textLeft}>
              <span className={styles.span}>
                {language.aboutUsPage.subtitle}
              </span>
            </p>
            <h2 className={styles.title}>
              {language.aboutUsPage.gastronomy}
            </h2>
            <div className={styles.description}>
              {language.aboutUsPage.gastronomyDescription}
            </div>
            <h2 className={styles.title}>
              {language.aboutUsPage.experience}
            </h2>
            <div className={styles.description}>
              {language.aboutUsPage.experienceDescription}
            </div>
            <h3 className={styles.title}>
              {language.aboutUsPage.spa}
            </h3>
            <div className={styles.description}>
              {language.aboutUsPage.spaDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
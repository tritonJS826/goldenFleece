import React from "react";
import styles from "./ServiceBlock.module.scss";
import image from "../../../resources/sliderImages/Promo3.jpg";
import {useTranslation} from "react-i18next";

export const ServiceBlock = () => {
  const {t} = useTranslation();
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
                {t("services")}
              </span>
            </p>
            <h2 className={styles.title}>
              {t("Gastronomy")}
            </h2>
            <div className={styles.description}>
              {t("gastronomyDescription")}
            </div>
            <h2 className={styles.title}>
              {t("experience")}
            </h2>
            <div className={styles.description}>
              {t("experienceDescription")}
            </div>
            <h3 className={styles.title}>
              {t("Spa")}
            </h3>
            <div className={styles.description}>
              {t("spaDescription")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
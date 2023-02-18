import React from "react";
import styles from "./servicesBlock.module.scss";
import {NavLink} from "react-router-dom";
import room1 from "../../resources/rooms/1.jpg";
import {useTranslation} from "react-i18next";

export const ServicesBlock = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <NavLink className={styles.link}
          to="/gastronomy"
        >
          <img className={styles.serviceImage}
            src={room1}
            alt="Gastronomy"
          />
          <h3 className={styles.titleService}>
            {t("Gastronomy")}
          </h3>
          <span className={styles.spanLink}>
            {t("More")}
          </span>
        </NavLink>
      </div>
      <div className={styles.service}>
        <NavLink className={styles.link}
          to="/expierences"
        >
          <img className={styles.serviceImage}
            src={room1}
            alt="Experiences"
          />
          <h3 className={styles.titleService}>
            {t("Experiences")}
          </h3>
          <span className={styles.spanLink}>
            {t("More")}
          </span>
        </NavLink>
      </div>
      <div className={styles.service}>
        <NavLink className={styles.link}
          to="/spa"
        >
          <img className={styles.serviceImage}
            src={room1}
            alt="Spa"
          />
          <h3 className={styles.titleService}>
            {t("Spa")}
          </h3>
          <span className={styles.spanLink}>
            {t("More")}
          </span>
        </NavLink>
      </div>
    </div>
  );
};
import React from "react";
import styles from "./servicesBlock.module.scss";
import {NavLink} from "react-router-dom";
import room1 from "../../resources/rooms/1.jpg";
import {useCurrentLanguageContext} from "../../context/Context";


export const ServicesBlock = () => {
  const {language} = useCurrentLanguageContext();

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
            {language.component.gastronomy}
          </h3>
          <span className={styles.spanLink}>
            {language.component.buttonText}
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
            {language.component.experience}
          </h3>
          <span className={styles.spanLink}>
            {language.component.buttonText}
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
            {language.component.spa}
          </h3>
          <span className={styles.spanLink}>
            {language.component.buttonText}
          </span>
        </NavLink>
      </div>
    </div>
  );
};
import React from "react";
import {useDictionaryContext} from "../../context/Context";
import {NavLink} from "react-router-dom";
import room1 from "../../resources/rooms/1.jpg";
import styles from "./servicesBlock.module.scss";


export const ServicesBlock = () => {
  const {dictionary} = useDictionaryContext();
  const glossary = dictionary.servicesBlock;

  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <NavLink
          className={styles.link}
          to="/gastronomy"
        >
          <img
            className={styles.serviceImage}
            src={room1}
            alt="Gastronomy"
          />
          <h3 className={styles.titleService}>
            {glossary.gastronomy}
          </h3>
          <span className={styles.spanLink}>
            {glossary.buttonText}
          </span>
        </NavLink>
      </div>
      <div className={styles.service}>
        <NavLink
          className={styles.link}
          to="/expierences"
        >
          <img
            className={styles.serviceImage}
            src={room1}
            alt="Experiences"
          />
          <h3 className={styles.titleService}>
            {glossary.experiences}
          </h3>
          <span className={styles.spanLink}>
            {glossary.buttonText}
          </span>
        </NavLink>
      </div>
      <div className={styles.service}>
        <NavLink
          className={styles.link}
          to="/spa"
        >
          <img
            className={styles.serviceImage}
            src={room1}
            alt="Spa"
          />
          <h3 className={styles.titleService}>
            {glossary.spa}
          </h3>
          <span className={styles.spanLink}>
            {glossary.buttonText}
          </span>
        </NavLink>
      </div>
    </div>
  );
};
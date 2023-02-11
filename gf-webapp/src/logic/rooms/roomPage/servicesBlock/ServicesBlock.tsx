import React from "react";
import styles from "./servicesBlock.module.scss";
import {NavLink} from "react-router-dom";
import room1 from "../../../../resources/rooms/1.jpg";

export const ServicesBlock = () => {
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
            Gastronomy
          </h3>
          <span className={styles.spanLink}>
            More
          </span>
        </NavLink>
      </div>
      <div className={styles.service}>
        <NavLink className={styles.link}
          to="/expierences"
        >
          <img className={styles.serviceImage}
            src={room1}
            alt="Expierences"
          />
          <h3 className={styles.titleService}>
            Expierences
          </h3>
          <span className={styles.spanLink}>
            More
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
            Spa
          </h3>
          <span className={styles.spanLink}>
            More
          </span>
        </NavLink>
      </div>
    </div>
  );
};
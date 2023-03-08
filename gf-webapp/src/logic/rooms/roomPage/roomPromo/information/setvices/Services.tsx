import React from "react";
import styles from "./services.module.scss";

export const Services = ({services}: {services: string}) => {
  const roomServices = services.split(",").map(el => el.trim());
  return (
    <div className={styles.services}>
      <h3 className={styles.title}>
        Services:
      </h3>
      <ul className={styles.list}>
        {roomServices.map(service => (
          <li key={service}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};
import React from "react";
import styles from "./services.module.scss";

interface ServicesProps {
  services: string
}

export const Services = (props: ServicesProps) => {
  const roomServices = props.services.split(",").map(el => el.trim());
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
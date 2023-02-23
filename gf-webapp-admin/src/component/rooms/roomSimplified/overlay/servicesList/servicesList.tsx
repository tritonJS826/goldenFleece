import React from "react";
import styles from "./servicesList.module.scss";

interface IServices {
  services: string[] | undefined
}

export const ServicesList = ({services}: IServices) => {
  return (
    <ul className={styles.services}>
      <h4>
        Services
      </h4>
      {services?.map((service: string) => (
        <li key={service}>
          {service}
        </li>
      ))}
    </ul>
  );
};
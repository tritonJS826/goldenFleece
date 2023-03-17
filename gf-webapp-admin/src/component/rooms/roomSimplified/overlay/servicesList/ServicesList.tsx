import React from "react";
import {ApartmentServices} from "../../../../../model/Room/ApartmentServices";
import styles from "./ServicesList.module.scss";

interface IServices {
  services: ApartmentServices[]
}

export const ServicesList = ({services}: IServices) => {
  return (
    <ul className={styles.services}>
      <h4>
        Services
      </h4>
      {services.map((service: ApartmentServices) => (
        <li key={service}>
          {service}
        </li>
      ))}
    </ul>
  );
};
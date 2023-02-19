import React from "react";
import {RoomType} from "../../../../model/room";
import styles from "./overlay.module.scss";

export const Overlay = ({room}: RoomType) => {
  const services = room.services?.split(",").map(el => el.trim());
  return (
    <div className={styles.overlay}>
      <h3>
        {`${room.apartmentsType} room`}
      </h3>
      <ul className={styles.services}>
        <h4>
          Services
        </h4>
        {services?.map(service => (
          <li key={service}>
            {service}
          </li>
        ))}
      </ul>
      <div className={styles.container}>
        <p>
          {`Raiting: ${room.rating}`}
        </p>
        <p>
          {`Price: ${room.price}`}
        </p>
      </div>
    </div>
  );
};
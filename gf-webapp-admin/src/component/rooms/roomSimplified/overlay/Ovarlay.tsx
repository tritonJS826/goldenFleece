import React from "react";
import {Link} from "react-router-dom";
import {RoomType} from "../../../../model/room";
import {DeleteBtn} from "./deleteBtn/DeleteBtn";
import styles from "./overlay.module.scss";
import {ServicesList} from "./servicesList/servicesList";

export const Overlay = ({room}: RoomType) => {
  const services = room.services?.split(",").map(el => el.trim());

  return (
    <div
      className={styles.overlay}
    >
      <Link to={`rooms/${room.id}`}
        className={styles.info}
      >
        <h3>
          {`${room.apartmentsType} room`}
        </h3>
        <ServicesList services={services} />
        <div className={styles.container}>
          <p>
            {`Raiting: ${room.rating}`}
          </p>
          <p>
            {`Price: ${room.price}`}
          </p>
        </div>
      </Link>
      <DeleteBtn room={room} />
    </div>
  );
};
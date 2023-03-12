import React from "react";
import {Link} from "react-router-dom";
import {IRoom} from "../../../../model/room";
import {DeleteBtn} from "./deleteBtn/DeleteBtn";
import styles from "./overlay.module.scss";
import {ServicesList} from "./servicesList/servicesList";

interface OverlayProps {
  room: IRoom;
}

export const Overlay = (props: OverlayProps) => {
  const services = props.room.services.split(",").map(el => el.trim());

  return (
    <div
      className={styles.overlay}
    >
      <Link to={`rooms/${props.room.id}`}
        className={styles.info}
      >
        <h3>
          {`${props.room.apartmentsType} room`}
        </h3>
        <ServicesList services={services} />
        <div className={styles.container}>
          <p>
            {`Raiting: ${props.room.rating}`}
          </p>
          <p>
            {`Price: ${props.room.price}`}
          </p>
        </div>
      </Link>
      <DeleteBtn room={props.room} />
    </div>
  );
};
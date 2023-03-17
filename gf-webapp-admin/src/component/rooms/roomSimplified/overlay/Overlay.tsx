import React from "react";
import {Link} from "react-router-dom";
import {Room} from "../../../../model/Room/Room";
import {DeleteBtn} from "./deleteBtn/DeleteBtn";
import styles from "./Overlay.module.scss";
import {ServicesList} from "./servicesList/ServicesList";

interface OverlayProps {
  room: Room;
}

export const Overlay = (props: OverlayProps) => {
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
        <ServicesList services={props.room.services} />
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
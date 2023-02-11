import React from "react";
import styles from "./roomsBlock.module.scss";
import {NavLink} from "react-router-dom";
import room1 from "../../../../resources/rooms/1.jpg";
import room2 from "../../../../resources/rooms/2.jpg";
import room3 from "../../../../resources/rooms/3.jpg";
import room4 from "../../../../resources/rooms/4.jpg";
import room5 from "../../../../resources/rooms/5.jpg";

export const RoomsBlock = () => {
  return (
    <div className={styles.roomsWrap}>
      <h2 className={styles.title2}>
        More rooms
      </h2>
      <div className={styles.rooms}>
        <div className={styles.room}>
          <NavLink to="/rooms/1"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room1}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              Single room
            </h3>
            <span className={styles.spanLink}>
              More
            </span>
          </NavLink>
        </div>
        <div className={styles.room}>
          <NavLink to="/rooms/2"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room2}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              Single room
            </h3>
            <span className={styles.spanLink}>
              More
            </span>
          </NavLink>
        </div>
        <div className={styles.room}>
          <NavLink to="/rooms/3"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room3}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              Single room
            </h3>
            <span className={styles.spanLink}>
              More
            </span>
          </NavLink>
        </div>
        <div className={styles.room}>
          <NavLink to="/rooms/4"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room4}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              Single room
            </h3>
            <span className={styles.spanLink}>
              More
            </span>
          </NavLink>
        </div>
        <div className={styles.room}>
          <NavLink to="/rooms/5"
            className={({isActive}) =>
              isActive ? styles.link : undefined}
          >
            <img className={styles.roomImage}
              src={room5}
              alt="Single room"
            />
            <h3 className={styles.title3}>
              Single room
            </h3>
            <span className={styles.spanLink}>
              More
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
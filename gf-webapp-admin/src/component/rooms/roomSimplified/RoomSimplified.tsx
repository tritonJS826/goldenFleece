import React, {useState} from "react";
import {RoomType} from "../../../model/room";
import {Overlay} from "./overlay/Ovarlay";
import styles from "./roomSimplified.module.scss";


export const RoomSimplified = ({room}: RoomType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.roomSimplified}
    >
      <div className={styles.imageContainer}>
        <img src={room.promo}
          alt="room-promo"
        />
        {isHovered && <Overlay room={room} />}
      </div>
    </div>
  );
};
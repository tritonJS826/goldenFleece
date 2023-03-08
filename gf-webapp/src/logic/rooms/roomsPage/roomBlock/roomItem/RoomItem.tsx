import React from "react";
import {Room} from "../../../../../model/room";
import {Description} from "./description/Description";
import {PromoImage} from "./promoImage/PromoImage";
import styles from "./roomItem.module.scss";

export const RoomItem = ({room}: {room: Room}) => {
  return (
    <div className={styles.wrap}
      id={room.apartmentsType.toLowerCase()}
      key={room.id}
    >
      <PromoImage room={room} />
      <Description room={room} />
    </div>
  );
};
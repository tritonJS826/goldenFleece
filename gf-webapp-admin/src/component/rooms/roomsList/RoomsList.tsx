import React from "react";
import {RoomsType} from "../../../model/room";
import {RoomSimplified} from "../roomSimplified/RoomSimplified";
import styles from "./roomsList.module.scss";


export const RoomsList = ({rooms}: RoomsType) => {
  return (
    <div className={styles.container}>
      {rooms.map(room => (
        <RoomSimplified key={room.id}
          room={room}
        />
      ))}
    </div>
  );
};
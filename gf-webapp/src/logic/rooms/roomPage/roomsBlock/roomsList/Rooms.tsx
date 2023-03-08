import React from "react";
import {RoomsType} from "../../../../../model/room";
import {RoomItem} from "./RoomItem";
import styles from "../roomsBlock.module.scss";

export const Rooms = ({rooms}: RoomsType) => {
  return (
    <div className={styles.rooms}>
      {rooms.map(room =>
        (
          <RoomItem key={room.id}
            room={room}
          />
        ),
      )}
    </div>
  );
};
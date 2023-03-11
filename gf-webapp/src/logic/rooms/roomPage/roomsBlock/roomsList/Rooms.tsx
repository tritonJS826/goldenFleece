import React from "react";
import {Room} from "../../../../../model/Room";
import {RoomItem} from "./RoomItem";
import styles from "../roomsBlock.module.scss";

interface RoomsProps {
  rooms: Room[]
}

export const Rooms = (props: RoomsProps) => {
  return (
    <div className={styles.rooms}>
      {props.rooms.map(room =>
        (
          <RoomItem key={room.id}
            room={room}
          />
        ),
      )}
    </div>
  );
};
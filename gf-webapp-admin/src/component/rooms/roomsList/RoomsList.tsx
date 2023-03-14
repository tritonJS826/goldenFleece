import React from "react";
import {IRoom} from "../../../model/room";
import {RoomSimplified} from "../roomSimplified/RoomSimplified";
import styles from "./RoomsList.module.scss";

interface RoomsListProps {
  rooms:IRoom[]
}

export const RoomsList = (props: RoomsListProps) => {
  return (
    <div className={styles.container}>
      {props.rooms.map(room => (
        <RoomSimplified key={room.id}
          room={room}
        />
      ))}
    </div>
  );
};
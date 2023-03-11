import React from "react";
import styles from "./RoomsPlan.module.scss";
import {roomsSchema} from "./roomsSchema";

export const RoomsPlan = () => {

  const renderRoomsSchema = () => {
    return roomsSchema.map((room) => (
      <div
        key={room.id}
        className={`${styles.planRoom} ${room.className}`}
        id={room.id}
      >
        {room.title}
      </div>));
  };

  return (
    <div>
      {renderRoomsSchema()}
    </div>
  );
};
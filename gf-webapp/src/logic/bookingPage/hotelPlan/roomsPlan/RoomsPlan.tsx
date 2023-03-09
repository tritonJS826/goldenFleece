import React from "react";
import styles from "./RoomsPlan.module.scss";
import {roomsArray} from "./roomsArray";

export const RoomsPlan = () => {

  const renderRoomsPlan = () => {
    return roomsArray.map((room) => (
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
      {renderRoomsPlan()}
    </div>
  );
};
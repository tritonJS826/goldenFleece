import React from "react";
import {useRooms} from "./useRooms";

export function Rooms() {
  const {rooms} = useRooms();

  return (
    <>
      {rooms.map((room) => (<div key={room.id}>
        Price:
        {" "}
        {room.price}
      </div>))}
    </>
  );
}
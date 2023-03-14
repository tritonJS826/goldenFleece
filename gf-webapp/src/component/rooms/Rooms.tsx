import React from "react";
import {Room} from "../../model/Room/Room";
import {useRooms} from "./useRooms";

export function Rooms() {
  const {rooms} = useRooms();

  const renderRooms = (roomsList: Room[]) => {
    return roomsList.map((room) => (
      <React.Fragment key={room.id}>
        <>
          Price:
          {" "}
          {room.price}
        </>
      </React.Fragment>
    ));
  };

  return (
    <>
      {renderRooms(rooms)}
    </>
  );
}
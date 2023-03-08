import React, {useEffect, useState} from "react";
import {getRooms, roomsInit} from "../../../../service/rooms";
import {Room} from "../../../../model/Room";
import {RoomItem} from "./roomItem/RoomItem";
import {Loader} from "../../../../component/loader/Loader";

export const RoomBlock = () => {

  const [rooms, setRooms] = useState<Room[]>([] as Room[]);

  useEffect(() => {
    (async () => {
      const roomsList = await getRooms();
      setRooms(roomsList);
    })();
  }, [rooms]);

  const isRoomsInit = roomsInit(rooms);

  return isRoomsInit ?
    <div>
      {rooms.map(room => (
        <RoomItem key={room.id}
          room={room}
        />
      ))}
    </div>
    :
    <Loader />
  ;
};


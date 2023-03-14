import React, {useEffect, useState} from "react";
import {getRooms} from "../../../../service/rooms";
import {Room} from "../../../../model/Room";
import {RoomItem} from "./roomItem/RoomItem";
import {Loader} from "../../../../component/loader/Loader";

export const RoomBlock = () => {

  const [rooms, setRooms] = useState<Room[] | null>(null);

  const initRooms = async () => {
    const roomsList = await getRooms();
    setRooms(roomsList);
  };

  useEffect(() => {
    initRooms();
  }, [rooms]);

  return rooms ?
    <div>
      {rooms.map(room => (
        <RoomItem
          key={room.id}
          room={room}
        />
      ))}
    </div>
    :
    <Loader />
  ;
};


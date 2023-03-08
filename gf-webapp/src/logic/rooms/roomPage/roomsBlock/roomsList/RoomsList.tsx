import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "../../../../../component/loader/Loader";
import {Room} from "../../../../../model/room";
import {getRandomRooms, roomsInit} from "../../../../../service/rooms";
import {Rooms} from "./Rooms";

export const RoomsList = () => {
  const displayedRoomsCount = 3;
  const [randomRooms, setRandomRooms] = useState<Room[]>([] as Room[]);
  const roomParams = useParams();
  const currentRoomId = roomParams.id;

  useEffect(() => {
    (async () => {
      if (currentRoomId) {
        const rooms = await getRandomRooms(displayedRoomsCount, currentRoomId);
        setRandomRooms(rooms);
      }
    })();
  }, [currentRoomId]);

  const isRoomsInit = roomsInit(randomRooms);

  return isRoomsInit ?
    <Rooms rooms={randomRooms} />
    :
    <Loader />;
};
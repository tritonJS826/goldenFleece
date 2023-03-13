import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "../../../../../component/loader/Loader";
import {Room} from "../../../../../model/Room";
import {getRandomRooms} from "../../../../../service/rooms";
import {Rooms} from "./Rooms";

export const RoomsList = () => {
  const displayedRoomsCount = 3;
  const [randomRooms, setRandomRooms] = useState<Room[] | null>(null);
  const roomParams = useParams();
  const currentRoomId = roomParams.id;

  const randomRoomsInit = async () => {
    if (currentRoomId) {
      const rooms = await getRandomRooms(displayedRoomsCount, currentRoomId);
      setRandomRooms(rooms);
    }
  };

  useEffect(() => {
    randomRoomsInit();
  }, [currentRoomId]);


  return randomRooms ?
    <Rooms rooms={randomRooms} />
    :
    <Loader />;
};
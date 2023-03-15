import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "src/component/loader/Loader";
import {Room} from "src/model/Room/Room";
import {getShuffledRooms} from "src/service/rooms";
import {Rooms} from "src/logic/rooms/roomPage/roomsBlock/roomsList/Rooms";

export const RoomsList = () => {
  const displayedRoomsCount = 3;
  const [randomRooms, setRandomRooms] = useState<Room[] | null>(null);
  const roomParams = useParams();
  const currentRoomId = roomParams.id;

  const randomRoomsInit = async () => {
    if (currentRoomId) {
      const rooms = await getShuffledRooms(displayedRoomsCount, currentRoomId);
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
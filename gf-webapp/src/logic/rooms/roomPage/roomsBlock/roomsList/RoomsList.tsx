import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "gf-ui-lib/components/Loader/Loader";
import {Room} from "../../../../../model/Room/Room";
import {getShuffledRooms} from "../../../../../service/rooms";
import {Rooms} from "./Rooms";

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

  if (!randomRooms) {
    return <Loader />;
  }

  return (<Rooms rooms={randomRooms} />);
};
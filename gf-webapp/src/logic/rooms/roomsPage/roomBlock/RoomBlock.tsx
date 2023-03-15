import {useEffect, useState} from "react";
import {Room} from "../../../../model/Room/Room";
import {RoomItem} from "./roomItem/RoomItem";
import {Loader} from "../../../../component/loader/Loader";
import {RoomApiService} from "../../../../service/RoomApi/RoomApi";

export const RoomsBlock = () => {
  const [rooms, setRooms] = useState<Room[] | null>(null);

  const initRooms = async () => {
    const roomsList = await RoomApiService.getAllRooms();
    setRooms(roomsList);
    console.log(roomsList, "222");
  };

  useEffect(() => {
    initRooms();
  }, []);

  const renderRoomItem = (roomsList: Room[]) => {
    return roomsList.map(room => (
      <RoomItem
        key={room.id}
        room={room}
      />
    ));
  };

  return rooms
    ? (
      <div>
        {renderRoomItem(rooms)}
      </div>
    )
    : <Loader />
  ;
};


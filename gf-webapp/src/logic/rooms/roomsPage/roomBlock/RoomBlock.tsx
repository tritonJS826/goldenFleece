import {useEffect, useState} from "react";
import {Room} from "src/model/Room/Room";
import {RoomItem} from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem";
import {Loader} from "src/component/loader/Loader";
import {RoomApiService} from "src/service/RoomApi/RoomApi";

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


import {useEffect, useState} from "react";
import {Room} from "src/model/Room/Room";
import {RoomItem} from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem";
import {RoomApiService} from "src/service/RoomApi/RoomApi";

interface RoomsBlockProps {
  setIsNavigationBlockInitTrue: () => void;
}

export const RoomsBlock = (props: RoomsBlockProps) => {
  const [rooms, setRooms] = useState<Room[] | null>(null);

  const initRooms = async () => {
    const roomsList = await RoomApiService.getAllRooms();
    setRooms(roomsList);
  };

  useEffect(() => {
    initRooms();
    props.setIsNavigationBlockInitTrue();
  }, []);

  const renderRoomItem = (roomsList: Room[]) => {
    return roomsList.map(room => (
      <RoomItem
        key={room.id}
        room={room}
      />
    ));
  };

  // if data not initialized yet
  if (!rooms) {
    return null;
  }

  // when data initialized
  return (
    <div>
      {renderRoomItem(rooms)}
    </div>
  );

};


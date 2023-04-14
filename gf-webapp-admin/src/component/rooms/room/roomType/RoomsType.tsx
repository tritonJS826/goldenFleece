import {useState} from "react";
import {RoomType} from "src/model/Room/RoomType";
import {RoomsTypeList} from "src/component/rooms/room/roomType/roomsTypeList/RoomsTypeList";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";

export const RoomsType = () => {
  const {room, setRoom} = useRoomContext();

  const [roomType, setRoomType] = useState<RoomType>(room.type);
  const validRoom: string[] = Object.values(RoomType);

  const isValidRoom = (inputRoom: string): inputRoom is RoomType => {
    return validRoom.includes(inputRoom);
  };

  const onChangeRoomType = (type: string) => {
    if (isValidRoom(type)) {
      setRoomType(type);
      room.type = type;
      setRoom(room);
    }
  };


  return (
    <div>
      <SmallTitle
        text="Room type"
      />
      <RoomsTypeList
        roomType={roomType}
        onChangeRoomType={onChangeRoomType}
      />
    </div>
  );
};
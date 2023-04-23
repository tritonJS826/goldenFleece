import React, {useState} from "react";
import {RoomType} from "src/model/Room/RoomType";
import {useAddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import styles from "src/component/sideMenu/addRoomModal/roomType/roomsTypeList/RoomsTypeList.module.scss";

export const RoomsTypeList = () => {
  const {room, setRoom} = useAddRoomContext();

  const [roomType, setRoomType] = useState(room.type);

  const validRoom: string[] = Object.values(RoomType);

  const isValidRoom = (inputRoom: string): inputRoom is RoomType => {
    return validRoom.includes(inputRoom);
  };

  const onChangeRoomType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    if (isValidRoom(type)) {
      setRoomType(type);
      room.type = type;
      setRoom(room);
    }
  };

  const renderRoomTypeOptions = () => {
    return Object.keys(RoomType).map(type => (
      <option key={type}
        value={type}
      >
        {type}
      </option>
    ));
  };

  return (
    <select
      className={styles.list}
      value={roomType}
      onChange={onChangeRoomType}
    >
      {renderRoomTypeOptions()}
    </select>
  );
};
import {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {RoomType} from "src/model/Room/RoomType";
import styles from "src/component/sideMenu/addRoomModal/roomType/roomsTypeList/RoomsTypeList.module.scss";

export const RoomsTypeList = () => {
  const {roomStartState} = useContext(AddRoomContext);

  const [roomType, setRoomType] = useState(roomStartState.type);

  const onChangeRoomType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoomType(e.target.value as RoomType);
  };

  useEffect(() => {
    roomStartState.type = roomType;
  }, [roomType]);

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
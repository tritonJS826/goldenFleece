import {RoomType} from "src/model/Room/RoomType";
import styles from "src/component/rooms/room/roomType/roomsTypeList/RoomsTypeList.module.scss";

interface RoomsTypeListProps {
  roomType: keyof typeof RoomType;
  onChangeRoomType: (roomType: string) => void;
}

export const RoomsTypeList = (props: RoomsTypeListProps) => {

  const renderRoomsTypeOptions = () =>
    Object.keys(RoomType).map(roomType => (
      <option key={roomType}
        value={roomType}
      >
        {roomType}
      </option>
    ));

  return (
    <select className={styles.list}
      value={props.roomType}
      onChange={(e) => props.onChangeRoomType(e.target.value)}
    >
      {renderRoomsTypeOptions()}
    </select>
  );
};
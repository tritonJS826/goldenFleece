import {Room} from "src/model/Room/Room";
import {RoomSimplified} from "src/component/rooms/roomSimplified/RoomSimplified";
import styles from "src/component/rooms/roomsList/RoomsList.module.scss";

interface RoomsListProps {
  rooms:Room[]
}

export const RoomsList = (props: RoomsListProps) => {

  const renderRooms = () => {
    return props.rooms.map(room => (
      <RoomSimplified
        key={room.id}
        room={room}
      />
    ));
  };

  return (
    <div className={styles.container}>
      {renderRooms()}
    </div>
  );
};
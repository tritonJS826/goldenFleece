import {Room} from "src/model/Room/RoomDeprecated";
import {RoomSimplified} from "src/component/rooms/roomSimplified/RoomSimplified";
import styles from "src/component/rooms/roomsList/RoomsList.module.scss";

interface RoomsListProps {
  rooms:Room[]
}

export const RoomsList = (props: RoomsListProps) => {
  return (
    <div className={styles.container}>
      {props.rooms.map(room => (
        <RoomSimplified key={room.id}
          room={room}
        />
      ))}
    </div>
  );
};
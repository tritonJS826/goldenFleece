import {Room} from "src/model/Room/Room";
import {RoomItem} from "src/logic/rooms/roomPage/roomsBlock/roomsList/RoomItem";
import styles from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock.module.scss";

interface RoomsProps {
  rooms: Room[]
}

export const Rooms = (props: RoomsProps) => {
  return (
    <div className={styles.rooms}>
      {props.rooms.map(room =>
        (
          <RoomItem
            key={room.id}
            promoImgUrl={room.promoImgUrl}
            roomId={room.id}
          />
        ),
      )}
    </div>
  );
};
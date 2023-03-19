import {Room} from "../../../../../model/Room/Room";
import {RoomItem} from "./RoomItem";
import styles from "../RoomsBlock.module.scss";

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
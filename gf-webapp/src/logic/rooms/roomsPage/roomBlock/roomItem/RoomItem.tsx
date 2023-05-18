import {Room} from "src/model/Room/Room";
import {Description} from "src/logic/rooms/roomsPage/roomBlock/roomItem/description/Description";
import {PromoImage} from "src/logic/rooms/roomsPage/roomBlock/roomItem/promoImage/PromoImage";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

interface RoomItemProps {
  room: Room;
}

export const RoomItem = (props: RoomItemProps) => {
  return (
    <div className={styles.wrap}>
      <PromoImage promoImageUrl={props.room.promoImgUrl} />
      <Description
        roomId={props.room.id}
        roomNumber={props.room.roomNumber}
        adults={props.room.adults}
        roomSquare={props.room.square}
        roomDescription={props.room.description}
        childrenValue={props.room.children}
      />
    </div>
  );
};
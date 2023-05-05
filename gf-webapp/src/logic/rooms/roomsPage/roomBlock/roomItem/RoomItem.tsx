import {Room} from "src/model/Room/Room";
import {Description} from "src/logic/rooms/roomsPage/roomBlock/roomItem/description/Description";
import {PromoImage} from "src/logic/rooms/roomsPage/roomBlock/roomItem/promoImage/PromoImage";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

export const RoomItem = ({room}: {room: Room}) => {
  return (
    <div className={styles.wrap}>
      <PromoImage promoImageUrl={room.promoImgUrl} />
      <Description
        roomId={room.id}
        roomNumber={room.roomNumber}
        adults={room.adults}
        roomSquare={room.square}
        type={room.type}
        roomDescription={room.description}
      />
    </div>
  );
};
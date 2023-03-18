import {Room} from "src/model/Room/Room";
import {Description} from "./description/Description";
import {PromoImage} from "./promoImage/PromoImage";
import styles from "./RoomItem.module.scss";

export const RoomItem = ({room}: {room: Room}) => {
  return (
    <div
      className={styles.wrap}
      id={room.apartmentsType.toString()}
      key={room.id}
    >
      <PromoImage promoImageUrl={room.promoImgUrl} />
      <Description
        roomId={room.id}
        adults={room.adults}
        roomSquare={room.square}
      />
    </div>
  );
};
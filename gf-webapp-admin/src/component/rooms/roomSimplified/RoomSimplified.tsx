import {useState} from "react";
import {Room} from "src/model/Room/Room";
import {Overlay} from "src/component/rooms/roomSimplified/overlay/Overlay";
import styles from "src/component/rooms/roomSimplified/RoomSimplified.module.scss";

interface RoomSimplifiedProps {
  room: Room
}

export const RoomSimplified = (props: RoomSimplifiedProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.roomSimplified}
    >
      <div className={styles.imageContainer}>
        <img src={props.room.promoImgUrl}
          alt="room-promo"
        />
        {isHovered && <Overlay room={props.room} />}
      </div>
    </div>
  );
};
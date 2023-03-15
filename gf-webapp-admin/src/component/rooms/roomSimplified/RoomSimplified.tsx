import {useState} from "react";
import {IRoom} from "../../../model/room";
import {Overlay} from "./overlay/Overlay";
import styles from "./RoomSimplified.module.scss";

interface RoomSimplifiedProps {
  room: IRoom
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
        <img src={props.room.promo}
          alt="room-promo"
        />
        {isHovered && <Overlay room={props.room} />}
      </div>
    </div>
  );
};
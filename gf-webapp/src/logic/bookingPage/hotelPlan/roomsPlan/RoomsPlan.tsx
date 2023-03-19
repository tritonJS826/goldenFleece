import {roomsSchema} from "./roomsSchema";
import styles from "./RoomsPlan.module.scss";

export const RoomsPlan = () => {

  const renderRoomsSchema = () => {
    return roomsSchema.map((room) => (
      <div
        key={room.id}
        className={`${styles.planRoom} ${room.className}`}
        id={room.id}
      >
        {room.title}
      </div>));
  };

  return (
    <div>
      {renderRoomsSchema()}
    </div>
  );
};
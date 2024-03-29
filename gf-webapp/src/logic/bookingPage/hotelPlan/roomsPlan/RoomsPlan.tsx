import {roomsSchema} from "src/logic/bookingPage/hotelPlan/roomsPlan/roomsSchema";
import styles from "src/logic/bookingPage/hotelPlan/roomsPlan/RoomsPlan.module.scss";

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
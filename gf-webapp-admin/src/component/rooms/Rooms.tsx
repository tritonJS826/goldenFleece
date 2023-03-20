import {useEffect, useState} from "react";
import {Room} from "src/model/Room/RoomDeprecated";
import {getRooms} from "src/service/RoomService";
import {Loader} from "gf-ui-lib/components/Loader/Loader";
import {RoomsList} from "src/component/rooms/roomsList/RoomsList";
import styles from "src/component/rooms/Rooms.module.scss";

export const Rooms = () => {
  const [rooms, setRooms] = useState<Room[] | null>(null);

  const roomsInit = async () => {
    const roomsList = await getRooms();
    setRooms(roomsList);
  };

  useEffect(() => {
    roomsInit();
  }, []);

  return (
    <div className={styles.rooms}>
      <h2 className={styles.title}>
        Rooms
      </h2>
      {
        rooms ?
          <RoomsList rooms={rooms} />
          :
          <Loader />
      }
    </div>
  );
};
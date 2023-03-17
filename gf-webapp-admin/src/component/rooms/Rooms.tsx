import React, {useEffect, useState} from "react";
import {Room} from "../../model/Room/RoomDeprecated";
import styles from "./Rooms.module.scss";
import {getRooms} from "../../service/RoomService";
import {Loader} from "../loader/Loader";
import {RoomsList} from "./roomsList/RoomsList";

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
import React, {useEffect, useState} from "react";
import {IRoom} from "../../model/room";
import {getRooms} from "../../service/room";
import {Loader} from "../loader/Loader";
import {RoomsList} from "./roomsList/RoomsList";
import styles from "./Rooms.module.scss";

export const Rooms = () => {
  const [rooms, setRooms] = useState<IRoom[] | null>(null);

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
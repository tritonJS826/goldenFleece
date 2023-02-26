import React, {useEffect, useState} from "react";
import {IRoom} from "../../model/room";
import styles from "./rooms.module.scss";
import {getRooms} from "../../service/room";
import {Loader} from "../loader/Loader";
import {RoomsList} from "./roomsList/RoomsList";

export const Rooms = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    (async () => {
      const roomsList = await getRooms();
      setRooms(roomsList);
    })();
  }, []);

  if(!rooms.length) {
    return <Loader />;
  }

  return (
    <div className={styles.rooms}>
      <h2 className={styles.title}>
        Rooms
      </h2>
      <RoomsList rooms={rooms} />
    </div>
  );
};
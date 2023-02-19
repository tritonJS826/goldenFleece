import React, {useEffect, useState} from "react";
import {IRoom} from "../../model/room";
import styles from "./rooms.module.scss";
import {Room} from "./room/Room";
import {getRooms} from "../../service/room";
import {RoomSimplified} from "./roomSimplified/RoomSimplified";

export const Rooms = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    (async () => {
      const roomsList = await getRooms();
      setRooms(roomsList);
    })();
  }, []);

  return (
    <div className={styles.rooms}>
      <h2>
        Rooms
      </h2>
      <div className={styles.container}>
        {rooms.map(room => (
          <RoomSimplified key={room.id}
            room={room}
          />
        ))}
      </div>

    </div>
  );
};
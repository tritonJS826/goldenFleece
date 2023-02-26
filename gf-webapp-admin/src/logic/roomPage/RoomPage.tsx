import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "../../component/loader/Loader";
import {Room} from "../../component/rooms/room/Room";
import {SideMenu} from "../../component/sideMenu/SideMenu";
import {IRoom} from "../../model/room";
import {getRoom} from "../../service/room";
import styles from "./roomPage.module.scss";

export const RoomPage = () => {
  const roomParams = useParams();
  const roomId = roomParams.id;
  const [room, setRoom] = useState<IRoom>({});

  useEffect(() => {
    (async () => {
      if (roomId) {
        const roomBack = await getRoom(roomId);
        setRoom(roomBack);
      }
    })();
  }, []);

  if(!Object.keys(room).length) {
    return <Loader />;
  }

  return (
    <div className={styles.roomPage}>
      <SideMenu />
      <Room room={room} />
    </div>
  );
};
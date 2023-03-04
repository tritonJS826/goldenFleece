import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Room} from "../../component/rooms/room/Room";
import {IRoom} from "../../model/room";
import {getRoom} from "../../service/room";
import {BorderedAdminPage} from "../borderedAdminPage/BorderedAdminPage";
import styles from "./roomPage.module.scss";

export const RoomPage = () => {
  const roomParams = useParams();
  const roomId = roomParams.id;
  const [room, setRoom] = useState<IRoom>({} as IRoom);

  useEffect(() => {
    (async () => {
      if (roomId) {
        const roomBack = await getRoom(roomId);
        setRoom(roomBack);
      }
    })();
  }, []);

  return (
    <BorderedAdminPage>
      <div className={styles.roomPage}>
        <Room room={room} />
      </div>
    </BorderedAdminPage>

  );
};
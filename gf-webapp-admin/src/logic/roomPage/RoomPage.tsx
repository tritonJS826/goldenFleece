import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "../../component/loader/Loader";
import {Room} from "../../component/rooms/room/Room";
import {IRoom} from "../../model/room";
import {getRoom} from "../../service/room";
import styles from "./RoomPage.module.scss";
import {BorderedAdminPage} from "../borderedAdminPage/BorderedAdminPage";

export const RoomPage = () => {
  const roomParams = useParams();
  const roomId = roomParams.id;
  const [room, setRoom] = useState<IRoom | null>(null);

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
        {
          room ?
            <Room room={room} />
            :
            <Loader />
        }
      </div>
    </BorderedAdminPage>
  );
};
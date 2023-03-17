import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "../../component/loader/Loader";
import {RoomItem} from "../../component/rooms/room/RoomItem";
import {Room} from "../../model/Room/RoomDeprecated";
import {getRoom} from "../../service/RoomService";
import styles from "./RoomPage.module.scss";
import {BorderedAdminPage} from "../borderedAdminPage/BorderedAdminPage";

export const RoomPage = () => {
  const roomParams = useParams();
  const roomId = roomParams.id;
  const [room, setRoom] = useState<Room | null>(null);

  const roomInit = async () => {
    if (roomId) {
      const roomBack = await getRoom(roomId);
      setRoom(roomBack);
    }
  };

  useEffect(() => {
    roomInit();
  }, []);

  return (
    <BorderedAdminPage>
      <div className={styles.roomPage}>
        {
          room ?
            <RoomItem room={room} />
            :
            <Loader />
        }
      </div>
    </BorderedAdminPage>
  );
};
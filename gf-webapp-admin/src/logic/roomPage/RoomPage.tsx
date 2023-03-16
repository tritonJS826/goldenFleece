import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "gf-ui-lib/components/Loader/Loader";
import {Room} from "../../component/rooms/room/Room";
import {IRoom} from "../../model/room";
import {getRoom} from "../../service/room";
import {BorderedAdminPage} from "../borderedAdminPage/BorderedAdminPage";
import styles from "./RoomPage.module.scss";

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
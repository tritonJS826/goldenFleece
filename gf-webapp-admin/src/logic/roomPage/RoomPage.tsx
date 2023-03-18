import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "gf-ui-lib/components/Loader/Loader";
import {RoomItem} from "../../component/rooms/room/RoomItem";
import {Room} from "../../model/Room/RoomDeprecated";
import {getRoom} from "../../service/RoomService";
import {BorderedAdminPage} from "../borderedAdminPage/BorderedAdminPage";
import styles from "./RoomPage.module.scss";

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
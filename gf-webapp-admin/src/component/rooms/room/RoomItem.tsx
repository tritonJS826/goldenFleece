import {Room} from "src/model/Room/Room";
import {Adults} from "src/component/rooms/room/adults/Adults";
import {RoomsType} from "src/component/rooms/room/roomType/RoomsType";
import {Description} from "src/component/rooms/room/description/Description";
import {LongDescription} from "src/component/rooms/room/longDescription/LongDescription";
import {Price} from "src/component/rooms/room/price/Price";
import {Promo} from "src/component/rooms/room/promo/Promo";
import {Rating} from "src/component/rooms/room/rating/Rating";
import {Services} from "src/component/rooms/room/services/Services";
import {Slider} from "src/component/rooms/room/slider/Slider";
import {Square} from "src/component/rooms/room/square/Square";
import {Button} from "gf-ui-lib/components/Button/Button";
import {useNavigate} from "react-router-dom";
import {deleteRoom, saveRoom} from "src/service/RoomService";
import {MAIN_PAGE_ROUTE} from "src/utils/pathes";
import {RoomContext} from "src/component/rooms/room/roomContext";
import {useState} from "react";
import styles from "src/component/rooms/room/RoomItem.module.scss";

interface RoomProps {
  room:Room;
}

export const RoomItem = (props: RoomProps) => {

  const navigate = useNavigate();
  const [room, setRoom] = useState<Room>(props.room);

  const deleteWithRedirect = () => {
    deleteRoom(room.id);
    navigate(MAIN_PAGE_ROUTE);
  };

  const updateRoom = () => {
    saveRoom(room);
    navigate(MAIN_PAGE_ROUTE);
  };

  return (
    <RoomContext.Provider value={{room, setRoom}}>
      <div className={styles.room}>
        <h2 className={styles.title}>
          {`Room #${room.roomNumber}`}
        </h2>
        <RoomsType />
        <Description />
        <LongDescription />
        <Services />
        <div className={styles.wrapper}>
          <Rating />
          <Price />
          <Square />
          <Adults />
        </div>
        <Promo room={room} />
        <Slider room={room} />
        <div className={styles.buttons}>
          <Button
            value="Update room"
            onClick={updateRoom}
          />
          <Button
            value="Delete room"
            onClick={deleteWithRedirect}
          />
        </div>
      </div>
    </RoomContext.Provider>
  );
};

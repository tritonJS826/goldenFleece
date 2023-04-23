import {Room} from "src/model/Room/Room";
import {ApartmentsType} from "src/component/rooms/room/apartmentType/ApartmentType";
import {Price} from "src/component/rooms/room/price/Price";
import {Promo} from "src/component/rooms/room/promo/Promo";
import {Services} from "src/component/rooms/room/services/Services";
import {Slider} from "src/component/rooms/room/slider/Slider";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {useNavigate} from "react-router-dom";
import {deleteRoom, saveRoom} from "src/service/RoomService";
import {MAIN_PAGE_ROUTE} from "src/utils/pathes";
import {RoomContext} from "src/component/rooms/room/roomContext";
import {useState} from "react";
import {NumberField} from "gf-ui-lib/src/components/NumberField/NumberField";
import {TextField} from "gf-ui-lib/src/components/TextField/TextField";
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
          {`Room #${Number(room.id) + 1}`}
        </h2>
        <ApartmentsType />
        <TextField
          value={room.description}
          titleText='Room description'
          onChangeValue={(value: string) => {
            room.description = value;
            setRoom(room);
          }}
        />
        <TextField
          type="textarea"
          value={room.descriptionLong}
          titleText='Room Long description'
          onChangeValue={(value: string) => {
            room.descriptionLong = value;
            setRoom(room);
          }}
        />
        <Services />
        <div className={styles.wrapper}>
          <NumberField
            value={room.rating}
            titleText='Room rating'
            onChangeValue={(value: number) => {
              room.rating = value;
              setRoom(room);
            }}
          />
          <Price />
          <NumberField
            value={room.square}
            titleText='Room square'
            onChangeValue={(value: number) => {
              room.square = value;
              setRoom(room);
            }}
          />
          <NumberField
            value={room.adults}
            titleText='Room adults'
            onChangeValue={(value: number) => {
              room.adults = value;
              setRoom(room);
            }}
          />
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

import {Room} from "src/model/Room/RoomDeprecated";
import {Adults} from "src/component/rooms/room/adults/Adults";
import {ApartmentsType} from "src/component/rooms/room/apartmentType/ApartmentType";
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
import {deleteRoom} from "src/service/RoomService";
import {MAIN_PAGE_ROUTE} from "src/utils/pathes";
import {RoomContext} from "src/component/rooms/room/roomContext";
import styles from "src/component/rooms/room/Room.module.scss";

interface RoomProps {
  room:Room;
}

export const RoomItem = (props: RoomProps) => {

  const navigate = useNavigate();

  const deleteWithRedirect = () => {
    deleteRoom(props.room.id);
    navigate(MAIN_PAGE_ROUTE);
  };

  return (
    <RoomContext.Provider value={{room: props.room}}>
      <div className={styles.room}>
        <h2 className={styles.title}>
          {`Room #${Number(props.room.id) + 1}`}
        </h2>
        <ApartmentsType room={props.room} />
        <Description room={props.room} />
        <LongDescription room={props.room} />
        <Services room={props.room} />
        <div className={styles.wrapper}>
          <Rating room={props.room} />
          <Price room={props.room} />
          <Square room={props.room} />
          <Adults room={props.room} />
        </div>
        <Promo room={props.room} />
        <Slider room={props.room} />
        <Button
          value="Delete room"
          onClick={deleteWithRedirect}
        />
      </div>
    </RoomContext.Provider>
  );
};

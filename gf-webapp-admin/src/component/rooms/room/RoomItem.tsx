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
import styles from "src/component/rooms/room/Room.module.scss";

interface RoomProps {
  room:Room;
}

export const RoomItem = (props: RoomProps) => {

  return (
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
    </div>
  );
};

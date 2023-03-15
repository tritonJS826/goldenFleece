import {IRoom} from "../../../model/room";
import {Adults} from "./adults/Adults";
import {ApartmentsType} from "./apartmentType/ApartmentType";
import {Description} from "./description/Description";
import {LongDescription} from "./longDescription/LongDescription";
import {Price} from "./price/Price";
import {Promo} from "./promo/Promo";
import {Rating} from "./rating/Rating";
import styles from "./Room.module.scss";
import {Services} from "./services/Services";
import {Slider} from "./slider/Slider";
import {Square} from "./square/Square";

interface RoomProps {
  room:IRoom;
}

export const Room = (props: RoomProps) => {

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

import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {RoomNumber} from "src/model/Room/RoomNumbers";
import styles from "src/logic/rooms/roomPage/roomPromo/RoomPromo.module.scss";

interface TitleProps {
  description: string;
  promoImgUrl: string;
  roomNumber: RoomNumber;
}

export const Title = (props: TitleProps) => {
  const {roomInfo} = useDictionary().dictionary;

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.promo}
        src={props.promoImgUrl}
        alt="Promo image"
      />
      <h1 className={styles.title}>
        {roomInfo.title[props.roomNumber]}
      </h1>
    </div>
  );
};
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {RoomType} from "src/model/Room/RoomType";
import styles from "src/logic/rooms/roomPage/roomPromo/RoomPromo.module.scss";

interface TitleProps {
  description: string;
  promoImgUrl: string;
  type: RoomType;
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
        {roomInfo.shortRoomDescription[props.type]}
      </h1>
    </div>
  );
};
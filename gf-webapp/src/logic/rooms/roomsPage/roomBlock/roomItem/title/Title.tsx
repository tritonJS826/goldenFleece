import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {RoomType} from "src/model/Room/RoomType";
import styles from "../RoomItem.module.scss";

interface TitleProps {
  roomNumber: number;
  roomTitle: RoomType;
}

export const Title = (props: TitleProps) => {
  const dictionary = useDictionary().dictionary;
  return (
    <div>
      <span className={styles.span}>
        {props.roomNumber}
      </span>
      <h3 className={styles.titleBook}>
        {dictionary.roomInfo[props.roomTitle]}
        {/* TODO: render right apartmentsType for specific room */}
      </h3>
    </div>
  );
};
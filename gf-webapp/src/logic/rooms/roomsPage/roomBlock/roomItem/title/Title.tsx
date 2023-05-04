import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {RoomType} from "src/model/Room/RoomType";
import styles from "../RoomItem.module.scss";

interface TitleProps {
  roomNumber: number;
  type: RoomType;
}

export const Title = (props: TitleProps) => {
  const dictionary = useDictionary().dictionary;
  return (
    <div>
      <span className={styles.span}>
        {props.roomNumber}
      </span>
      <h2 className={styles.titleBook}>
        {dictionary.roomInfo[props.type]}
      </h2>
    </div>
  );
};
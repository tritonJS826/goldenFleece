import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";
import {RoomType} from "src/model/Room/RoomType";

interface InformationProps {
  roomSquare: number;
  adults: number;
  roomDescription: string;
  roomTitle: RoomType;
}

export const Information = (props: InformationProps) => {
  const UPPER_INDEX = 2;
  const dictionary = useDictionary().dictionary;
  return (
    <div>
      <div className={styles.settingsRoom}>
        {props.roomSquare}
        {dictionary.roomInfo.dimension}
        <span className={styles.sub}>
          {`${UPPER_INDEX}`}
        </span>
        <span>
          {` / ${props.adults} `}
        </span>
        {dictionary.roomInfo.adults}
      </div>
      <div className={styles.description}>
        {dictionary.roomInfo.roomDescription[props.roomTitle]}
        {/* TODO: add room dynamic description from dictionary */}
      </div>
    </div>

  );
};
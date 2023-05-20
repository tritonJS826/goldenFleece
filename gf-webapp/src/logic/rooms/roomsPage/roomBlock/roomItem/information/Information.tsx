import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {languageService} from "src/service/Language/LanguageService";
import {Dictionary} from "src/model/Dictionary/Dictionary";
import styles from "src/logic/rooms/roomsPage/roomBlock/roomItem/RoomItem.module.scss";

interface InformationProps {
  roomSquare: number;
  adults: number;
  roomDescription: Dictionary;
}

export const Information = (props: InformationProps) => {
  const dictionary = useDictionary().dictionary.roomInfo;
  const UPPER_INDEX = 2;

  return (
    <div>
      <div className={styles.settingsRoom}>
        {props.roomSquare}
        {dictionary.dimension}
        <span className={styles.sub}>
          {`${UPPER_INDEX}`}
        </span>
        <span>
          {` / ${props.adults} `}
        </span>
        {dictionary.adults}
      </div>
      <div className={styles.description}>
        {props.roomDescription[languageService.getCurrentLanguage()].descriptionLong}
      </div>
    </div>

  );
};
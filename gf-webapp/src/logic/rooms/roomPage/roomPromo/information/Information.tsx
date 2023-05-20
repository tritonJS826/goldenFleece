import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {Price} from "src/model/Price/Price";
import {RoomServices} from "src/model/Room/RoomServices";
import {Services} from "src/logic/rooms/roomPage/roomPromo/information/services/Services";
import {languageService} from "src/service/Language/LanguageService";
import {Dictionary} from "src/model/Dictionary/Dictionary";
import styles from "src/logic/rooms/roomPage/roomPromo/RoomPromo.module.scss";

interface InformationProps {
  price: Price;
  services: RoomServices[];
  roomDescription: Dictionary;
}

export const Information = (props: InformationProps) => {
  const {roomInfo} = useDictionary().dictionary;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.description}>
          {props.roomDescription[languageService.getCurrentLanguage()].description}
        </div>
        <div className={styles.description}>
          {`${roomInfo.price}: ${props.price.getFullPrice()}`}
        </div>
      </div>
      <Services services={props.services} />
    </div>
  );
};
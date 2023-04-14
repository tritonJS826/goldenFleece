import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {Price} from "src/model/Price/Price";
import {RoomType} from "src/model/Room/RoomType";
import {RoomServices} from "src/model/Room/RoomServices";
import {Services} from "src/logic/rooms/roomPage/roomPromo/information/services/Services";
import styles from "src/logic/rooms/roomPage/roomPromo/RoomPromo.module.scss";

interface InformationProps {
  type: RoomType;
  price: Price;
  services: RoomServices[];
}

export const Information = (props: InformationProps) => {
  const dictionary = useDictionary().dictionary;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.description}>
          TODO: render right description for specific room
        </div>
        <div className={styles.description}>
          {`Price: ${props.price.getFullPrice()}`}
        </div>
      </div>
      <Services services={props.services} />
    </div>
  );
};
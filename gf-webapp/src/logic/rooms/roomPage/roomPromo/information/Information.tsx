import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {Price} from "src/model/Price/Price";
import {RoomServices} from "src/model/Room/RoomServices";
import {Services} from "src/logic/rooms/roomPage/roomPromo/information/services/Services";
import {RoomNumber} from "src/model/Room/RoomNumbers";
import styles from "src/logic/rooms/roomPage/roomPromo/RoomPromo.module.scss";

interface InformationProps {
  roomNumber: RoomNumber;
  price: Price;
  services: RoomServices[];
}

export const Information = (props: InformationProps) => {
  const {roomInfo} = useDictionary().dictionary;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.description}>
          {roomInfo.descriptionShort[props.roomNumber]}
        </div>
        <div className={styles.description}>
          {`${roomInfo.price}: ${props.price.getFullPrice()}`}
        </div>
      </div>
      <Services services={props.services} />
    </div>
  );
};
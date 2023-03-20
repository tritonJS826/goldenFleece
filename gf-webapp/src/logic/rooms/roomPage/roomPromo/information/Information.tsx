import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {Price} from "src/model/Price";
import {Apartments} from "src/model/Room/Apartments";
import {ApartmentServices} from "src/model/Room/ApartmentServices";
import {Services} from "src/logic/rooms/roomPage/roomPromo/information/services/Services";
import styles from "src/logic/rooms/roomPage/roomPromo/RoomPromo.module.scss";

interface InformationProps {
  apartmentsType: Apartments;
  price: Price;
  services: ApartmentServices[];
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
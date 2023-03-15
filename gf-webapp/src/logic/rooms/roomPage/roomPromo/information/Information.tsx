import {useDictionaryContext} from "../../../../../context/Context";
import {Price} from "../../../../../model/Price";
import {Apartments} from "../../../../../model/Room/Apartments";
import {ApartmentServices} from "../../../../../model/Room/ApartmentServices";
import {Services} from "./services/Services";
import styles from "../RoomPromo.module.scss";

interface InformationProps {
  apartmentsType: Apartments;
  price: Price;
  services: ApartmentServices[];
}

export const Information = (props: InformationProps) => {
  const dictionary = useDictionaryContext().dictionary;
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
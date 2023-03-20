import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import imgPromo from "src/resources/rooms/rooms.jpg";
import styles from "src/logic/rooms/roomsPage/roomsPromo/RoomsPromo.module.scss";


export const RoomsPromo = () => {
  const {roomsPage} = useDictionary().dictionary;

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.promo}
          src={imgPromo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {roomsPage.title}
        </h1>
      </div>
    </div>
  );
};
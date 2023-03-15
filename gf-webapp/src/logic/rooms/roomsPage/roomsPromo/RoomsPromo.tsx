import {useDictionaryContext} from "../../../../context/Context";
import imgPromo from "../../../../resources/rooms/rooms.jpg";
import styles from "./RoomsPromo.module.scss";


export const RoomsPromo = () => {
  const {roomsPage} = useDictionaryContext().dictionary;

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
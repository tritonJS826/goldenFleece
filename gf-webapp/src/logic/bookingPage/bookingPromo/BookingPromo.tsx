import {useDictionaryContext} from "src/context/Context";
import imgPromo from "src/resources/rooms/rooms.jpg";
import styles from "src/logic/bookingPage/bookingPromo/BookingPromo.module.scss";


export const BookingPromo = () => {
  const {bookingPage} = useDictionaryContext().dictionary;

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.promo}
          src={imgPromo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {bookingPage.title}
        </h1>
      </div>
    </div>
  );
};
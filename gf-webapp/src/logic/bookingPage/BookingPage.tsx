import {PageBorder} from "src/component/pageBorder/PageBorder";
import {BookingPromo} from "src/logic/bookingPage/bookingPromo/BookingPromo";
import {HotelPlan} from "src/logic/bookingPage/hotelPlan/HotelPlan";
import styles from "src/logic/bookingPage/BookingPage.module.scss";

export const BookingPage = () => {
  return (
    <div>
      <PageBorder isShowLoader={false}>
        <BookingPromo />
        <h2 className={styles.title}>
          Choose one of room
        </h2>
        <HotelPlan />
      </PageBorder>
    </div>
  );
};
import React from "react";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {BookingPromo} from "./bookingPromo/BookingPromo";
import {HotelPlan} from "./hotelPlan/HotelPlan";
import styles from "./BookingPage.module.scss";

export const BookingPage = () => {
  return (
    <div>
      <PageBorder>
        <BookingPromo />
        <h2 className={styles.title}>
          Choose one of room
        </h2>
        <HotelPlan />
      </PageBorder>
    </div>
  );
};
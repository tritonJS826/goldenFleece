import {useState} from "react";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {BookingPromo} from "src/logic/bookingPage/bookingPromo/BookingPromo";
import {
  Filters,
  defaultSearchValue,
  defaultAdultsValue,
  defaultChildrenValue,
  MIN_DATE_IN,
  MIN_DATE_OUT,
} from "src/component/filter/Filters";
import {RoomsBlockWithFilters} from "src/component/filter/RoomsBlockWithFilters";
import styles from "src/logic/bookingPage/BookingPage.module.scss";

export const BookingPage = () => {
  return (
    <div>
      <PageBorder isShowLoader={false}>
        <BookingPromo />
        <h2 className={styles.title}>
          Choose one of room
        </h2>
        <Filters />
        <RoomsBlockWithFilters />
      </PageBorder>
    </div>
  );
};
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
import {FilterRoomsContext} from "src/component/filter/FilterContext";
import {RoomsBlockWithFilters} from "src/component/filter/RoomsBlockWithFilters";
import styles from "src/logic/bookingPage/BookingPage.module.scss";

export const BookingPage = () => {
  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const [dateInValue, setDateInValue] = useState(MIN_DATE_IN);
  const [dateOutValue, setDateOutValue] = useState(MIN_DATE_OUT);
  const [adultsValue, setAdultsValue] = useState(defaultAdultsValue);
  const [childrenValue, setChildrenValue] = useState(defaultChildrenValue);

  return (
    <div>
      <PageBorder isShowLoader={false}>
        <BookingPromo />
        <h2 className={styles.title}>
          Choose one of room
        </h2>
        <FilterRoomsContext.Provider
          value={{
            searchValue,
            setSearchValue,
            dateInValue,
            setDateInValue,
            dateOutValue,
            setDateOutValue,
            adultsValue,
            setAdultsValue,
            childrenValue,
            setChildrenValue,
          }}
        >
          <Filters />
          <RoomsBlockWithFilters />
        </FilterRoomsContext.Provider>
      </PageBorder>
    </div>
  );
};
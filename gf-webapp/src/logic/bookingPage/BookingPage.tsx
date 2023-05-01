import {useState} from "react";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {BookingPromo} from "src/logic/bookingPage/bookingPromo/BookingPromo";
import {Filters} from "src/component/filter/Filters";
import {FilterRoomsContext} from "src/component/filter/FilterContext";
import {RoomsBlockWithFilters} from "src/component/filter/RoomsBlockWithFilters";
import {getCurrentDate, getNextDate} from "src/utils/getDate";
import styles from "src/logic/bookingPage/BookingPage.module.scss";


export const BookingPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dateInValue, setDateInValue] = useState(getCurrentDate);
  const [dateOutValue, setDateOutValue] = useState(getNextDate);
  const [adultsValue, setAdultsValue] = useState(1);
  const [childrenValue, setChildrenValue] = useState(0);

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
import {useState} from "react";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {BookingPromo} from "src/logic/bookingPage/bookingPromo/BookingPromo";
import {HotelPlan} from "src/logic/bookingPage/hotelPlan/HotelPlan";
import {Filter} from "src/component/filter/Filter";
import {FilterRoomsContext} from "src/component/filter/FilterContext";
import styles from "src/logic/bookingPage/BookingPage.module.scss";
// import {RoomsBlock} from "../rooms/roomsPage/roomBlock/RoomBlock";
import {useRooms} from "src/component/rooms/useRooms";
import {RoomsBlock} from "src/component/filter/Rooms";

export const BookingPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dateInValue, setDateInValue] = useState("yyyy-MM-dd");
  const [dateOutValue, setDateOutValue] = useState("yyyy-MM-dd");
  const [adultsValue, setAdultsValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);

  const [isNavigationBlockInitialized, setIsNavigationBlockInitialized] = useState(true);

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
          <Filter />
          <RoomsBlock setIsNavigationBlockInitializedFalse={() => setIsNavigationBlockInitialized} />
          {/* <HotelPlan /> */}
        </FilterRoomsContext.Provider>
      </PageBorder>
    </div>
  );
};
import {useState} from "react";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {BookingPromo} from "src/logic/bookingPage/bookingPromo/BookingPromo";
import {Filters} from "src/component/filter/Filters";
import {RoomsBlockWithFilters} from "src/component/filter/RoomsBlockWithFilters";
import styles from "src/logic/bookingPage/BookingPage.module.scss";

export const BookingPage = () => {
  const [isNavigationBlockInitialized, setIsNavigationBlockInitialized] = useState(true);

  return (
    <div>
      <PageBorder
        isLoading={isNavigationBlockInitialized}
        isShowLoader={true}
      >
        <BookingPromo />
        <h2 className={styles.title}>
          Choose one of room
        </h2>
        <Filters />
        <RoomsBlockWithFilters setIsNavigationBlockInitializedFalse={() => setIsNavigationBlockInitialized(false)} />
      </PageBorder>
    </div>
  );
};
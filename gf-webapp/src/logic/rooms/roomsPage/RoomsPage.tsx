import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {RoomsPromo} from "src/logic/rooms/roomsPage/roomsPromo/RoomsPromo";
import {Navigation} from "src/logic/rooms/roomsPage/navigation/Navigation";
import {ServicesBlock} from "src/component/servicesBlock/ServicesBlock";
import {BookingBlock} from "src/component/bookBlock/BookingBlock";
import {useState} from "react";
import styles from "src/logic/rooms/roomsPage/RoomsPage.module.scss";


export const RoomsPage = () => {
  const {roomsPage} = useDictionary().dictionary;
  const [isNavigationBlockInitialized, setIsNavigationBlockInitialized] = useState(true);

  return (
    <div>
      <PageBorder
        isLoading={isNavigationBlockInitialized}
        isShowLoader={true}
      >
        <RoomsPromo />
        <div className={styles.about}>
          {roomsPage.description}
        </div>
        <Navigation
          setIsNavigationBlockInitializedFalse={() => setIsNavigationBlockInitialized(false)}
        />
        <div className={styles.about}>
          {roomsPage.description}
        </div>
        <ServicesBlock />
        <BookingBlock />
      </PageBorder>
    </div>
  );
};


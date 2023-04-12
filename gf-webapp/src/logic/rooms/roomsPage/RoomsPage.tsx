import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {RoomsPromo} from "src/logic/rooms/roomsPage/roomsPromo/RoomsPromo";
import {Navigation} from "src/logic/rooms/roomsPage/navigation/Navigation";
import {ServicesBlock} from "src/component/servicesBlock/ServicesBlock";
import {BookingBlock} from "src/component/bookBlock/BookingBlock";
import {useState} from "react";
import {Loader} from "gf-ui-lib/src/components/Loader/Loader";
import styles from "src/logic/rooms/roomsPage/RoomsPage.module.scss";


export const RoomsPage = () => {
  const {roomsPage} = useDictionary().dictionary;
  const [isNavigationBlockInit, setIsNavigationBlockInit] = useState(false);

  // function setIsNavigationBlockInitTrue() {
  //   setIsNavigationBlockInit(true);
  // }

  return (
    <div>
      <PageBorder>
        <Loader isLoading={isNavigationBlockInit} />
        <RoomsPromo />
        <div className={styles.about}>
          {roomsPage.description}
        </div>
        <Navigation
          setIsNavigationBlockInitTrue={() => setIsNavigationBlockInit(true)}
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


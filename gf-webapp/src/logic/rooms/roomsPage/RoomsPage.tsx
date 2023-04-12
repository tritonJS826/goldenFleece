import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {RoomsPromo} from "src/logic/rooms/roomsPage/roomsPromo/RoomsPromo";
import {Navigation} from "src/logic/rooms/roomsPage/navigation/Navigation";
import {ServicesBlock} from "src/component/servicesBlock/ServicesBlock";
import {BookingBlock} from "src/component/bookBlock/BookingBlock";
import {useState} from "react";
import {Loader} from "gf-ui-lib/components/Loader/Loader";
import styles from "src/logic/rooms/roomsPage/RoomsPage.module.scss";


export const RoomsPage = () => {
  const {roomsPage} = useDictionary().dictionary;
  const [isDataLoading, setIsDataLoading] = useState(false);

  function handleDataLoading() {
    setIsDataLoading(true);
  }

  return (
    <div>
      <PageBorder>
        <Loader isLoading={isDataLoading} />
        <RoomsPromo />
        <div className={styles.about}>
          {roomsPage.description}
        </div>
        <Navigation
          handleDataLoading={handleDataLoading}
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


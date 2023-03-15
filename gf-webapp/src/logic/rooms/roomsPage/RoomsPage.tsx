import {useDictionaryContext} from "src/context/Context";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {RoomsPromo} from "src/logic/rooms/roomsPage/roomsPromo/RoomsPromo";
import {Navigation} from "src/logic/rooms/roomsPage/navigation/Navigation";
import {ServicesBlock} from "src/component/servicesBlock/ServicesBlock";
import {BookingBlock} from "src/component/bookBlock/BookingBlock";
import styles from "src/logic/rooms/roomsPage/RoomsPage.module.scss";


export const RoomsPage = () => {
  const {roomsPage} = useDictionaryContext().dictionary;

  return (
    <div>
      <PageBorder>
        <RoomsPromo />
        <div className={styles.about}>
          {roomsPage.description}
        </div>
        <Navigation />
        <div className={styles.about}>
          {roomsPage.description}
        </div>
        <ServicesBlock />
        <BookingBlock />
      </PageBorder>
    </div>
  );
};


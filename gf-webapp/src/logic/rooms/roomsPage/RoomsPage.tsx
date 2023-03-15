import {useDictionaryContext} from "../../../context/Context";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomsPromo} from "./roomsPromo/RoomsPromo";
import {Navigation} from "./navigation/Navigation";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import styles from "./RoomsPage.module.scss";


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


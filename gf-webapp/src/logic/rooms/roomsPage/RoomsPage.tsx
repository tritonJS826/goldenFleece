import React from "react";
import {useDictionaryContext} from "../../../context/Context";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomsPromo} from "./roomsPromo/RoomsPromo";
import {Navigation} from "./navigation/navigation";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import styles from "./roomsPage.module.scss";


export const RoomsPage = () => {
  const {dictionary} = useDictionaryContext();
  const glossary = dictionary.roomsPage;

  return (
    <div>
      <PageBorder>
        <RoomsPromo />
        <div className={styles.about}>
          {glossary.description}
        </div>
        <Navigation />
        <div className={styles.about}>
          {glossary.description}
        </div>
        <ServicesBlock />
        <BookingBlock />
      </PageBorder>
    </div>
  );
};


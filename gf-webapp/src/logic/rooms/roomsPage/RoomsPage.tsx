import React, {useState, useEffect} from "react";
import {useCurrentDictionaryContext} from "../../../context/Context";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomsPromo} from "./roomsPromo/RoomsPromo";
import {Navigation} from "./navigation/navigation";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import styles from "./roomsPage.module.scss";


export const RoomsPage = () => {
  const {dictionary} = useCurrentDictionaryContext();

  return (
    <div>
      <PageBorder>
        <RoomsPromo />
        <div className={styles.about}>
          {dictionary.roomsPage.description}
        </div>
        <Navigation />
        <div className={styles.about}>
          {dictionary.roomsPage.description}
        </div>
        <ServicesBlock />
        <BookingBlock />
      </PageBorder>
    </div>
  );
};


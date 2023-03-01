import React, {useState, useEffect} from "react";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomsPromo} from "./roomsPromo/RoomsPromo";
import {Navigation} from "./navigation/navigation";
import styles from "./roomsPage.module.scss";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import {useTranslation} from "react-i18next";

export const RoomsPage = () => {
  const {t} = useTranslation();

  return (
    <div>
      <PageBorder>
        <RoomsPromo />
        <div className={styles.about}>
          {t("roomsAbout")}
        </div>
        <Navigation />
        <div className={styles.about}>
          {t("roomsAbout")}
        </div>
        <ServicesBlock />
        <BookingBlock />
      </PageBorder>
    </div>
  );
};


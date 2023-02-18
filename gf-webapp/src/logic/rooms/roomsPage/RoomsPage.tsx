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
  const [room, setRoom] = useState({
    id: "",
    services: "",
    images: {},
    apartmentsType: "",
    description: "",
    descriptionLong: "",
    price: 200,
    promo: "",
    slider: "",
    slider2: "",
    slider3: "",
    slider4: "",
    slider5: "",
    rating: 8,
  });

  const url = "http://localhost:3600/api/rooms";

  const fetchData = async () => {
    const res = await fetch(url);
    const final = await res.json();
    console.log(final);
    setRoom(final);
    return final;
  };

  useEffect(() => {
    fetchData();
  }, []);


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


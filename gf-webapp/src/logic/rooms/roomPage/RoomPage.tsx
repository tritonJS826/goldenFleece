import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomSlider} from "./roomSlider/RoomSlider";
import {RoomPromo} from "./roomPromo/RoomPromo";
import {RoomsBlock} from "./roomsBlock/RoomsBlock";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import styles from "./roomPage.module.scss";

type RoomParams = {
  id: string;
};

export const RoomPage = () => {
  const {id} = useParams<RoomParams>();
  const [room, setRoom] = useState({
    id: "",
    services: "",
    images: {},
    apartmentsType: "",
    description: "",
    descriptionLong: "",
    price: 200,
    promo: "",
    slider: [],
    rating: 8,
  });

  const url = "http://localhost:3600/api/rooms";

  const fetchData = async () => {
    const res = await fetch(url);
    const final = await res.json();
    console.log(final[Number(id)]);
    setRoom(final[Number(id)]);
    return final[Number(id)];
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageBorder>
      <RoomPromo promo={room.promo}
        description={room.description}
        apartmentsType={room.apartmentsType}
        price={room.price}
      />
      <div className={styles.about}>
        {room.descriptionLong}
      </div>
      <RoomSlider slider={room.slider} />
      <RoomsBlock />
      <ServicesBlock />
      <BookingBlock />
    </PageBorder>
  );
};
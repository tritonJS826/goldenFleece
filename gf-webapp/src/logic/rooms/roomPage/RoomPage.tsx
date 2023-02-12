import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomSlider} from "./roomSlider/RoomSlider";
import {RoomPromo} from "./roomPromo/RoomPromo";
import {RoomsBlock} from "./roomsBlock/RoomsBlock";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookBlock} from "../../../component/bookBlock/BookBlock";
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
      <RoomSlider promo={room.promo}
        slider={room.slider}
        slider2={room.slider2}
        slider3={room.slider3}
        slider4={room.slider4}
      />
      <RoomsBlock />
      <ServicesBlock />
      <BookBlock />
    </PageBorder>
  );
};
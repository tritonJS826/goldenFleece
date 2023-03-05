import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomSlider} from "./roomSlider/RoomSlider";
import {RoomPromo} from "./roomPromo/RoomPromo";
import {RoomsBlock} from "./roomsBlock/RoomsBlock";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import styles from "./roomPage.module.scss";
import {Room} from "../../../model/room";
import {getRoom, roomInit} from "../../../service/rooms";
import {Loader} from "../../../component/loader/Loader";

export const RoomPage = () => {
  const roomParams = useParams();
  const roomId = roomParams.id;
  const [room, setRoom] = useState({} as Room);

  useEffect(() => {
    (async () => {
      if (roomId) {
        const roomBack = await getRoom(roomId);
        setRoom(roomBack);
      }
    })();
  }, []);

  const isRoomInit = roomInit(room);

  return isRoomInit ?
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
    :
    <Loader />
  ;
};
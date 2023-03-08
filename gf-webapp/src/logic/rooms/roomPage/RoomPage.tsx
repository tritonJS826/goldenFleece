import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomSlider} from "./roomSlider/RoomSlider";
import {RoomPromo} from "./roomPromo/RoomPromo";
import {RoomsBlock} from "./roomsBlock/RoomsBlock";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import styles from "./roomPage.module.scss";
import {Room} from "../../../model/Room";
import {getRoom, roomInit} from "../../../service/rooms";
import {Loader} from "../../../component/loader/Loader";

export const RoomPage = () => {
  const roomParams = useParams();
  const roomId = roomParams.id;
  const [room, setRoom] = useState({} as Room);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (roomId) {
        try {
          const roomBack = await getRoom(roomId);
          setRoom(roomBack);
        } catch (e) {
          navigate("/rooms");
        }

      }
    })();
  }, [roomId]);

  const isRoomInit = roomInit(room);

  return isRoomInit ?
    <PageBorder>
      <RoomPromo room={room} />
      <div className={styles.about}>
        {room.descriptionLong}
      </div>
      <RoomSlider room={room} />
      <RoomsBlock />
      <ServicesBlock />
      <BookingBlock />
    </PageBorder>
    :
    <Loader />
  ;
};
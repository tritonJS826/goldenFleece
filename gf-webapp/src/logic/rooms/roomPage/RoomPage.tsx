import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomSlider} from "./roomSlider/RoomSlider";
import {RoomPromo} from "./roomPromo/RoomPromo";
import {RoomsBlock} from "./roomsBlock/RoomsBlock";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import {Room} from "../../../model/Room";
import {getRoom} from "../../../service/rooms";
import {Loader} from "../../../component/loader/Loader";
import {RoomApiService} from "../../../service/RoomApi/RoomApi";
import styles from "./roomPage.module.scss";

type RoomParams = {
  id: string;
};

export const RoomPage = () => {
  const {id} = useParams<RoomParams>();
  const [room, setRoom] = useState<Room | null>(null);

  const loadRoom = async (roomId: string): Promise<void> => {
    const currentRoom = await RoomApiService.getRoomById(roomId);
    setRoom(currentRoom);
    console.log(currentRoom);
  };

  useEffect(() => {
    if (id) {
      loadRoom(id);
    }
  }, [id]);

  return room ?
    <PageBorder>
      <RoomPromo
        promoImgUrl={room.promoImgUrl}
        description={room.description}
        apartmentsType={room.apartmentsType}
        price={room.price.getFullPrice()}
      />
      <div className={styles.about}>
        {room.descriptionLong}
      </div>
      <RoomSlider images={room.images} />
      <RoomsBlock />
      <ServicesBlock />
      <BookingBlock />
    </PageBorder>
    :
    <Loader />
  ;
};
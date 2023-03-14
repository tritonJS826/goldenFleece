import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomSlider} from "./roomSlider/RoomSlider";
import {RoomPromo} from "./roomPromo/RoomPromo";
import {RoomsBlock} from "./roomsBlock/RoomsBlock";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import styles from "./roomPage.module.scss";
import {Room} from "../../../model/Room/Room";
import {RoomApiService} from "../../../service/RoomApi/RoomApi";

type RoomParams = {
  id: string;
};

export const RoomPage = () => {
  const {id} = useParams<RoomParams>();
  const [room, setRoom] = useState<Room | null>(null);

  const url = "http://localhost:3600/api/rooms";

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

  if (!room) {
    // TODO: show spinner
    return null;
  }

  return (
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
  );
};
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {PageBorder} from "../../../component/pageBorder/PageBorder";
import {RoomSlider} from "./roomSlider/RoomSlider";
import {RoomPromo} from "./roomPromo/RoomPromo";
import {RoomsBlock} from "./roomsBlock/RoomsBlock";
import {ServicesBlock} from "../../../component/servicesBlock/ServicesBlock";
import {BookingBlock} from "../../../component/bookBlock/BookingBlock";
import {Room} from "../../../model/Room/Room";
import {RoomApiService} from "../../../service/RoomApi/RoomApi";
import styles from "./RoomPage.module.scss";
import {Loader} from "gf-ui-lib/components/Loader/Loader";

/**
 * Url Params
 */
type UrlParams = {
  /**
   * Room ID
   */
  id: string;
};

export const RoomPage = () => {
  const {id} = useParams<UrlParams>();
  const [room, setRoom] = useState<Room | null>(null);

  const loadRoom = async (roomId: string): Promise<void> => {
    const currentRoom = await RoomApiService.getRoomById(roomId);
    setRoom(currentRoom);
  };

  useEffect(() => {
    if (id) {
      loadRoom(id);
    }
  }, [id]);

  // if data not initialized yet
  if (!room) {
    return <Loader />;
  }

  return (
    <PageBorder>
      <RoomPromo
        promoImgUrl={room.promoImgUrl}
        description={room.description}
        apartmentsType={room.apartmentsType}
        price={room.price}
        service={room.services}
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
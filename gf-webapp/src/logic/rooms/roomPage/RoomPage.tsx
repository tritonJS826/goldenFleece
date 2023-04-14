import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {PageBorder} from "src/component/pageBorder/PageBorder";
import {RoomSlider} from "src/logic/rooms/roomPage/roomSlider/RoomSlider";
import {RoomPromo} from "src/logic/rooms/roomPage/roomPromo/RoomPromo";
import {RoomsBlock} from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock";
import {ServicesBlock} from "src/component/servicesBlock/ServicesBlock";
import {BookingBlock} from "src/component/bookBlock/BookingBlock";
import {Room} from "src/model/Room/Room";
import {RoomApiService} from "src/service/RoomApi/RoomApi";
import {Loader} from "gf-ui-lib/src/components/Loader/Loader";
import styles from "src/logic/rooms/roomPage/RoomPage.module.scss";

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
        type={room.type}
        price={room.price}
        services={room.services}
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
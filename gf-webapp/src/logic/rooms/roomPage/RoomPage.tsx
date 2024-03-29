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
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
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
  const {roomsPage} = useDictionary().dictionary;

  const loadRoom = async (roomId: string): Promise<void> => {
    const currentRoom = await RoomApiService.getRoomById(roomId);
    setRoom(currentRoom);
  };

  const [isRoomInitialized, setIsRoomInitialized] = useState(true);

  useEffect(() => {
    async function onRoomInitialized() {
      if (id) {
        await loadRoom(id);
        setIsRoomInitialized(false);
      }
    }
    onRoomInitialized();
  }, [id]);

  // if data not initialized yet
  if (!room) {
    return (
      <PageBorder
        isLoading={isRoomInitialized}
        isShowLoader={true}
      />);
  }

  return (
    <PageBorder
      isShowLoader={true}
      isLoading={isRoomInitialized}
    >
      <RoomPromo
        promoImgUrl={room.promoImgUrl}
        roomDescription={room.dictionary}
        price={room.price}
        services={room.services}
      />
      <div className={styles.about}>
        {roomsPage.description}
      </div>
      <RoomSlider images={room.images} />
      <RoomsBlock />
      <ServicesBlock />
      <BookingBlock />
    </PageBorder>
  );
};
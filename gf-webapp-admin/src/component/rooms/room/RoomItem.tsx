import {Room} from "src/model/Room/Room";
import {Promo} from "src/component/rooms/room/promo/Promo";
import {Slider} from "src/component/rooms/room/slider/Slider";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {useNavigate} from "react-router-dom";
import {deleteRoom, saveRoom} from "src/service/RoomService";
import {MAIN_PAGE_ROUTE} from "src/utils/pathes";
import {RoomContext} from "src/component/rooms/room/roomContext";
import {useState} from "react";
import {NumberField} from "gf-ui-lib/src/components/NumberField/NumberField";
import {CheckboxField} from "gf-ui-lib/src/components/CheckboxField/CheckboxField";
import {TextField} from "gf-ui-lib/src/components/TextField/TextField";
import {isValidRoomService, changeRoomServices} from "src/utils/isValidRoom";
import {enumToArray} from "src/utils/enumToArray";
import {RoomServices} from "src/model/Room/RoomServices";
import styles from "src/component/rooms/room/RoomItem.module.scss";

interface RoomProps {
  room:Room;
}
enum roomTitleText {
  type="Room type",
  description="Room description",
  longDescription="Room long description",
  price="Room price",
  rating="Room rating",
  square="Room square",
  adults="Room adults",
  services="Room services",
  promo="Room promo",
  slider="Room slider",
}

export const RoomItem = (props: RoomProps) => {

  const navigate = useNavigate();
  const [room, setRoom] = useState<Room>(props.room);

  const deleteWithRedirect = () => {
    deleteRoom(room.id);
    navigate(MAIN_PAGE_ROUTE);
  };

  const updateRoom = () => {
    saveRoom(room);
    navigate(MAIN_PAGE_ROUTE);
  };

  return (
    <RoomContext.Provider value={{room, setRoom}}>
      <div className={styles.room}>
        <h2 className={styles.title}>
          {`Room #${room.roomNumber}`}
        </h2>
        <TextField
          value={room.description}
          titleText={roomTitleText.description}
          onChangeValue={(value: string) => {
            room.description = value;
            setRoom(room);
          }}
        />
        <TextField
          type="textarea"
          value={room.descriptionLong}
          titleText={roomTitleText.longDescription}
          onChangeValue={(value: string) => {
            room.descriptionLong = value;
            setRoom(room);
          }}
        />
        <CheckboxField
          itemsList={enumToArray(RoomServices)}
          selectedItems={room.services}
          titleText={roomTitleText.services}
          onChangeValue={(service: string) => {
            isValidRoomService(service) ?
              room.services = changeRoomServices(room.services, service)
              :
              null;
            setRoom(room);
          }}
        />
        <div className={styles.wrapper}>
          <NumberField
            value={room.rating}
            titleText={roomTitleText.rating}
            onChangeValue={(value: number) => {
              room.rating = value;
              setRoom(room);
            }}
          />
          <NumberField
            value={room.price.getPriceAmount()}
            titleText={roomTitleText.price}
            onChangeValue={(value: number) => {
              room.price.setNewPrice(value);
            }}
          />
          <NumberField
            value={room.square}
            titleText={roomTitleText.square}
            onChangeValue={(value: number) => {
              room.square = value;
              setRoom(room);
            }}
          />
          <NumberField
            value={room.adults}
            titleText={roomTitleText.adults}
            onChangeValue={(value: number) => {
              room.adults = value;
              setRoom(room);
            }}
          />
        </div>
        <Promo
          promoImageUrl={room.promoImgUrl}
          titleText={roomTitleText.promo}
          updatePromoImageUrl={(imageUrl:string) => {
            room.promoImgUrl = imageUrl;
            setRoom(room);
          }}
        />
        <Slider
          slides={room.images}
          titleText={roomTitleText.slider}
          updateSlides={(slides) => {
            room.images = slides;
            setRoom(room);
          }}
        />
        <div className={styles.buttons}>
          <Button
            value="Update room"
            onClick={updateRoom}
          />
          <Button
            value="Delete room"
            onClick={deleteWithRedirect}
          />
        </div>
      </div>
    </RoomContext.Provider>
  );
};

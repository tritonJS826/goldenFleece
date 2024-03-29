import {useState} from "react";
import {Promo} from "src/component/rooms/room/promo/Promo";
import {Slider} from "src/component/rooms/room/slider/Slider";
import {AddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {CloseBtn} from "src/component/sideMenu/addRoomModal/closeBtn/CloseBtn";
import {ModalOverlay} from "src/component/sideMenu/addRoomModal/modalOverlay/ModalOverlay";
import {defaultRoom} from "src/component/sideMenu/addRoomModal/defaultRoom";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {postRoom} from "src/service/RoomService";
import {NewRoom} from "src/model/Room/NewRoom";
import {TextField} from "gf-ui-lib/src/components/TextField/TextField";
import {NumberField} from "gf-ui-lib/src/components/NumberField/NumberField";
import {changeRoomServices, isValidRoomService} from "src/utils/isValidRoom";
import {CheckboxField} from "gf-ui-lib/src/components/CheckboxField/CheckboxField";
import {enumToArray} from "src/utils/enumToArray";
import {RoomServices} from "src/model/Room/RoomServices";
import {useNavigate} from "react-router-dom";
import {MAIN_PAGE_ROUTE} from "src/utils/pathes";
import styles from "src/component/sideMenu/addRoomModal/AddRoomModal.module.scss";

interface AddRoomModalProps {
  toggleModalVisibility: () => void
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

export const AddRoomModal = (props: AddRoomModalProps) => {
  const [room, setRoom] = useState<NewRoom>(defaultRoom);
  const navigate = useNavigate();

  const addRoom = async () => {
    await postRoom(room);
    props.toggleModalVisibility();
    navigate(MAIN_PAGE_ROUTE);
    // TODO: need to update page without reload
    location.reload();
  };

  return (
    <AddRoomContext.Provider value={{room, setRoom}}>
      <div className={styles.addRoomModal}>
        <TextField
          value={room.description}
          placeholder={roomTitleText.description}
          titleText={roomTitleText.description}
          onChangeValue={(value: string) => {
            room.description = value;
            setRoom(room);
          }}
        />
        <TextField
          type="textarea"
          value={room.descriptionLong}
          placeholder='Enter room long description'
          titleText={roomTitleText.longDescription}
          onChangeValue={(value: string) => {
            room.descriptionLong = value;
            setRoom(room);
          }}
        />
        <div className={styles.wrapper}>
          <NumberField
            value={room.price.getPriceAmount()}
            titleText={roomTitleText.price}
            onChangeValue={(value: number) => {
              room.price.setNewPrice(value);
            }}
          />
          <NumberField
            value={room.rating}
            titleText={roomTitleText.rating}
            onChangeValue={(value: number) => {
              room.rating = value;
              setRoom(room);
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
        <CheckboxField
          itemsList={enumToArray(RoomServices)}
          selectedItems={room.services}
          titleText={roomTitleText.services}
          onChangeValue={(item: string) => {
            isValidRoomService(item) ?
              room.services = changeRoomServices(room.services, item)
              :
              null;
            setRoom(room);
          }}
        />
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
        <Button
          onClick={addRoom}
          value="Submit"
        />
        <CloseBtn toggleModalVisibility={props.toggleModalVisibility} />
      </div>
      <ModalOverlay toggleModalVisibility={props.toggleModalVisibility} />
    </AddRoomContext.Provider>
  );
};
import {useState} from "react";
import {Promo} from "src/component/rooms/room/promo/Promo";
import {Slider} from "src/component/rooms/room/slider/Slider";
import {AddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {Adults} from "src/component/sideMenu/addRoomModal/adults/Adults";
import {RoomType} from "src/component/sideMenu/addRoomModal/roomType/RoomType";
import {CloseBtn} from "src/component/sideMenu/addRoomModal/closeBtn/CloseBtn";
import {Description} from "src/component/sideMenu/addRoomModal/description/Description";
import {LongDescription} from "src/component/sideMenu/addRoomModal/longDescription/LongDescription";
import {ModalOverlay} from "src/component/sideMenu/addRoomModal/modalOverlay/ModalOverlay";
import {Price} from "src/component/sideMenu/addRoomModal/price/Price";
import {Rating} from "src/component/sideMenu/addRoomModal/rating/Rating";
import {defaultRoom} from "src/component/sideMenu/addRoomModal/roomStartState";
import {Services} from "src/component/sideMenu/addRoomModal/services/Services";
import {Square} from "src/component/sideMenu/addRoomModal/square/Square";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {postRoom} from "src/service/RoomService";
import {NewRoom} from "src/model/Room/NewRoom";
import styles from "src/component/sideMenu/addRoomModal/AddRoomModal.module.scss";
interface AddRoomModalProps {
  toggleModalVisibility: () => void
}

export const AddRoomModal = (props: AddRoomModalProps) => {

  const [room, setRoom] = useState<NewRoom>(defaultRoom);

  const addRoom = async () => {
    await postRoom(room);
    props.toggleModalVisibility();
    location.reload();
  };

  return (
    <AddRoomContext.Provider value={{room, setRoom}}>
      <div className={styles.addRoomModal}>
        <RoomType />
        <Description />
        <LongDescription />
        <div className={styles.wrapper}>
          <Price />
          <Rating />
          <Square />
          <Adults />
        </div>
        <Services />
        <Promo room={room} />
        <Slider room={room} />
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
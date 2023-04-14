import {useContext} from "react";
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
import styles from "src/component/sideMenu/addRoomModal/AddRoomModal.module.scss";

interface ShowModalProps {
  showModal: () => void
}

export const AddRoomModal = (props: ShowModalProps) => {
  const {roomStartState} = useContext(AddRoomContext);
  const addRoom = async () => {
    await postRoom(roomStartState);
    location.reload();
  };

  return (
    <AddRoomContext.Provider value={{roomStartState: defaultRoom}}>
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
        <Promo room={defaultRoom} />
        <Slider room={defaultRoom} />
        <Button
          onClick={addRoom}
          value="Submit"
        />
        <CloseBtn showModal={props.showModal} />
      </div>
      <ModalOverlay showModal={props.showModal} />
    </AddRoomContext.Provider>
  );
};
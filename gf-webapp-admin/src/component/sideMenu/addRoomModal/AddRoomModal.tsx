import {useContext} from "react";
import {Promo} from "../../rooms/room/promo/Promo";
import {Slider} from "../../rooms/room/slider/Slider";
import {AddRoomContext} from "./addRoomContext";
import {Adults} from "./adults/Adults";
import {ApartmentsType} from "./apartmentsType/ApartmentType";
import {CloseBtn} from "./closeBtn/CloseBtn";
import {Description} from "./description/Description";
import {LongDescription} from "./longDescription/LongDescription";
import {ModalOverlay} from "./modalOverlay/ModalOverlay";
import {Price} from "./price/Price";
import {Rating} from "./rating/Rating";
import {defaultRoomState} from "./roomStartState";
import {Services} from "./services/Services";
import {Square} from "./square/Square";
import {Button} from "gf-ui-lib/components/Button/Button";
import {postRoom} from "src/service/room";
import styles from "./AddRoomModal.module.scss";

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
    <AddRoomContext.Provider value={{roomStartState: defaultRoomState}}>
      <div className={styles.addRoomModal}>
        <ApartmentsType />
        <Description />
        <LongDescription />
        <div className={styles.wrapper}>
          <Price />
          <Rating />
          <Square />
          <Adults />
        </div>
        <Services />
        <Promo room={defaultRoomState} />
        <Slider room={defaultRoomState} />
        <Button
          type="button"
          onClick={addRoom}
          value="Submit"
        />
        <CloseBtn showModal={props.showModal} />
      </div>
      <ModalOverlay showModal={props.showModal} />
    </AddRoomContext.Provider>
  );
};
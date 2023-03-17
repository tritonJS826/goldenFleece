import React from "react";
import {Promo} from "../../rooms/room/promo/Promo";
import {Slider} from "../../rooms/room/slider/Slider";
import {AddRoomContext} from "./addRoomContext";
import {Adults} from "./adults/Adults";
import styles from "./AddRoomModal.module.scss";
import {ApartmentsType} from "./apartmentsType/ApartmentType";
import {CloseBtn} from "./closeBtn/CloseBtn";
import {Description} from "./description/Description";
import {LongDescription} from "./longDescription/LongDescription";
import {ModalOverlay} from "./modalOverlay/ModalOverlay";
import {Price} from "./price/Price";
import {Rating} from "./rating/Rating";
import {defaultRoom} from "./roomStartState";
import {Services} from "./services/Services";
import {Square} from "./square/Square";
import {SubmitBtn} from "./submitBtn/Submit";

interface ShowModalProps {
  showModal: () => void
}

export const AddRoomModal = (props: ShowModalProps) => {
  return (
    <AddRoomContext.Provider value={{roomStartState: defaultRoom}}>
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
        <Promo room={defaultRoom} />
        <Slider room={defaultRoom} />
        <SubmitBtn />
        <CloseBtn showModal={props.showModal} />
      </div>
      <ModalOverlay showModal={props.showModal} />
    </AddRoomContext.Provider>
  );
};
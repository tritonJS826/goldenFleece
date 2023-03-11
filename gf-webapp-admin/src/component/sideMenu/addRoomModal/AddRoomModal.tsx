import React from "react";
import {Promo} from "../../rooms/room/promo/Promo";
import {Slider} from "../../rooms/room/slider/Slider";
import {AddRoomContext} from "./addRoomContext";
import styles from "./addRoomModal.module.scss";
import {Adults} from "./adults/Adults";
import {ApartmentsType} from "./apartmentsType/ApartmentType";
import {CloseBtn} from "./closeBtn/CloseBtn";
import {Description} from "./description/Description";
import {LongDescription} from "./longDescription/LongDescription";
import {ModalOverlay} from "./modalOverlay/ModalOverlay";
import {Price} from "./price/Price";
import {Rating} from "./rating/Rating";
import {errors, roomStartState as room} from "./roomStartState";
import {Services} from "./services/Services";
import {Square} from "./square/Square";
import {SubmitBtn} from "./submitBtn/Submit";

interface ShowModalProps {
  showModal: () => void
}

export const AddRoomModal = (props: ShowModalProps) => {
  return (
    <AddRoomContext.Provider value={{
      room,
      errors,
    }}
    >
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
        <Promo room={room} />
        <Slider room={room} />
        <SubmitBtn />
        <CloseBtn showModal={props.showModal} />
      </div>
      <ModalOverlay showModal={props.showModal} />
    </AddRoomContext.Provider>
  );
};
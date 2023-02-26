import React from "react";
import {Promo} from "../../rooms/room/promo/Promo";
import {Slider} from "../../rooms/room/slider/Slider";
import {AddRoomContext} from "./addRoomContext";
import styles from "./addRoomModal.module.scss";
import {ApartmentsType} from "./apartmentsType/ApartmentType";
import {Description} from "./description/Description";
import {LongDescription} from "./longDescription/LongDescription";
import {Price} from "./price/Price";
import {Rating} from "./rating/Rating";
import {errors, room} from "./room";
import {Services} from "./services/Services";
import {SubmitBtn} from "./submitBtn/Submit";

export const AddRoomModal = () => {
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
        <Price />
        <Rating />
        <Services />
        <Promo room={room} />
        <Slider room={room} />
        <SubmitBtn />
      </div>
    </AddRoomContext.Provider>
  );
};
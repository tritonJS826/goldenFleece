import React from "react";
import {RoomType} from "../../../model/room";
import {ApartmentsType} from "./apartmentType/ApartmentType";
import {Description} from "./description/Description";
import {LongDescription} from "./longDescription/longDescription";
import {Price} from "./price/Price";
import {Promo} from "./promo/Promo";
import {Rating} from "./rating/Rating";
import styles from "./room.module.scss";
import {Services} from "./services/Services";
import {Slider} from "./slider/Slider";

export const Room = ({room}: RoomType) => {
  return (
    <div className={styles.room}>
      <h2 className={styles.title}>
        {`Room #${Number(room.id) + 1}`}
      </h2>
      <ApartmentsType room={room} />
      <Description room={room} />
      <LongDescription room={room} />
      <Services room={room} />
      <Rating room={room} />
      <Price room={room} />
      <Promo room={room} />
      <Slider room={room} />
    </div>
  );
};

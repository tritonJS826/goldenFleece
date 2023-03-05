import React from "react";
import {RoomType} from "../../../../../../model/room";
import styles from "../roomItem.module.scss";

export const PromoImage = ({room}: RoomType) => {
  return(
    <div className={styles.backImageWrap}>
      <img className={styles.backImage}
        src={room.promo}
        alt="room"
      />
    </div>
  );
};
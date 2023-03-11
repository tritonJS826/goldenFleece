import React from "react";
import {Room} from "../../../../../../model/Room";
import styles from "../roomItem.module.scss";

interface ImageProps {
  room: Room
}

export const PromoImage = (props: ImageProps) => {
  return(
    <div className={styles.backImageWrap}>
      <img className={styles.backImage}
        src={props.room.promo}
        alt="room"
      />
    </div>
  );
};
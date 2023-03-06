import React from "react";
import {useCurrentDictionaryContext} from "../../../../context/Context";
import imgPromo from "../../../../resources/rooms/rooms.jpg";
import styles from "./roomsPromo.module.scss";


export const RoomsPromo = () => {
  const {dictionary} = useCurrentDictionaryContext();

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.promo}
          src={imgPromo}
          alt="Promo image"
        />
        <h1 className={styles.title}>
          {dictionary.roomsPage.title}
        </h1>
      </div>
    </div>
  );
};
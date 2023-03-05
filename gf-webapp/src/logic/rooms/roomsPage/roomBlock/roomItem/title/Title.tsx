import React from "react";
import {useTranslation} from "react-i18next";
import {RoomType} from "../../../../../../model/room";
import {getRoomNumber} from "../../../../../../service/rooms";
import styles from "../roomItem.module.scss";

export const Title = ({room} :RoomType) => {
  const {t} = useTranslation();
  return (
    <div>
      <span className={styles.span}>
        {getRoomNumber(room.id)}
      </span>
      <h3 className={styles.titleBook}>
        {t(`${room.apartmentsType.toLowerCase()}Room`)}
      </h3>
    </div>
  );
};
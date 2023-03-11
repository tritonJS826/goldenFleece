import React from "react";
import {useTranslation} from "react-i18next";
import {Room} from "../../../../../../model/Room";
import {getRoomNumber} from "../../../../../../service/rooms";
import styles from "../roomItem.module.scss";

interface TitleProps {
  room: Room
}

export const Title = (props: TitleProps) => {
  const {t} = useTranslation();
  return (
    <div>
      <span className={styles.span}>
        {getRoomNumber(props.room.id)}
      </span>
      <h3 className={styles.titleBook}>
        {t(`${props.room.apartmentsType.toLowerCase()}Room`)}
      </h3>
    </div>
  );
};
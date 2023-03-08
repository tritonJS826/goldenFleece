import React from "react";
import {useTranslation} from "react-i18next";
import {RoomType} from "../../../../../model/Room";
import styles from "../roomPromo.module.scss";
import {Services} from "./setvices/Services";

export const Information = ({room}: RoomType) => {
  const {t} = useTranslation();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.description}>
          {t(`${room.apartmentsType.toLowerCase()}Room`)}
        </div>
        <div className={styles.description}>
          {`Price: ${room.price}$`}
        </div>
      </div>
      <Services services={room.services} />
    </div>
  );
};
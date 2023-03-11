import React from "react";
import {useTranslation} from "react-i18next";
import {Room} from "../../../../../model/Room";
import styles from "../roomPromo.module.scss";
import {Services} from "./setvices/Services";

interface InformationProps {
  room: Room
}

export const Information = (props: InformationProps) => {
  const {t} = useTranslation();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.description}>
          {t(`${props.room.apartmentsType.toLowerCase()}Room`)}
        </div>
        <div className={styles.description}>
          {`Price: ${props.room.price}$`}
        </div>
      </div>
      <Services services={props.room.services} />
    </div>
  );
};
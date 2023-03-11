import React from "react";
import {useTranslation} from "react-i18next";
import {Room} from "../../../../../../model/Room";
import styles from "../roomItem.module.scss";

interface InformationProps {
  room: Room
}

export const Information = (props: InformationProps) => {
  const UPPER_INDEX = 2;
  const {t} = useTranslation();
  return (
    <div>
      <div className={styles.settingsRoom}>
        {props.room.square}
        {t("dimension")}
        <span className={styles.sub}>
          {`${UPPER_INDEX}`}
        </span>
        <span>
          {` / ${props.room.adults} `}
        </span>
        {t("adults1")}
      </div>
      <div className={styles.description}>
        {t("wakeUp")}
      </div>
    </div>

  );
};
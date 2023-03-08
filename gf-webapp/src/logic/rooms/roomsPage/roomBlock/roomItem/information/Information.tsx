import React from "react";
import {useTranslation} from "react-i18next";
import {RoomType} from "../../../../../../model/Room";
import styles from "../roomItem.module.scss";

export const Information = ({room}: RoomType) => {
  const UPPER_INDEX = 2;
  const {t} = useTranslation();
  return (
    <div>
      <div className={styles.settingsRoom}>
        {room.square}
        {t("dimension")}
        <span className={styles.sub}>
          {`${UPPER_INDEX}`}
        </span>
        <span>
          {` / ${room.adults} `}
        </span>
        {t("adults1")}
      </div>
      <div className={styles.description}>
        {t("wakeUp")}
      </div>
    </div>

  );
};
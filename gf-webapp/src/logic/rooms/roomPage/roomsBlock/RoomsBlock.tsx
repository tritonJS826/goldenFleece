import React, {useEffect, useState} from "react";
import styles from "./roomsBlock.module.scss";
import {useTranslation} from "react-i18next";
import {RoomsList} from "./roomsList/RoomsList";

export const RoomsBlock = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.roomsWrap}>
      <h2 className={styles.title2}>
        {t("moreRooms")}
      </h2>
      <RoomsList />
    </div>
  );
};
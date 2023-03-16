import React, {useEffect, useState} from "react";
import {RoomsList} from "./roomsList/RoomsList";
import {useDictionary} from "../../../DictionaryContext/useDictionary";
import styles from "./RoomsBlock.module.scss";


export const RoomsBlock = () => {
  const {roomInfo} = useDictionary().dictionary;

  return (
    <div className={styles.roomsWrap}>
      <h2 className={styles.title2}>
        {roomInfo.roomsList}
      </h2>
      <RoomsList />
    </div>
  );
};
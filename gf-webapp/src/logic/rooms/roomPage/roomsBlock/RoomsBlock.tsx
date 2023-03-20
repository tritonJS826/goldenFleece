import {useEffect, useState} from "react";
import {RoomsList} from "src/logic/rooms/roomPage/roomsBlock/roomsList/RoomsList";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import styles from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock.module.scss";


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
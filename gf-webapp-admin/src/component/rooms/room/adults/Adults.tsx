import * as React from "react";
import {RoomType} from "../../../../model/room";
import {useState} from "react";
import {EditBtn} from "../editBtn/EditBtn";
import {saveRoom} from "../../../../service/room";
import styles from "./adults.module.scss";

export const Adults = ({room}: RoomType) => {
  const [adults, setAdults] = useState(String(room.adults));
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    room.adults = +adults;
    saveRoom(room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
  };

  return (
    <div className={styles.adults}>
      <label htmlFor={`adults-${room.id}`}>
        Room adults
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`adults-${room.id}`}
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          disabled={isEditFieldDisabled}
        />
        <EditBtn isEditFieldDisabled={isEditFieldDisabled}
          saveHandler={saveHandler}
          fieldEditHandler={fieldEditHandler}
        />
      </div>
    </div>
  );
};
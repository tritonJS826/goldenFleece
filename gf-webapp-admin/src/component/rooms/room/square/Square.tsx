import * as React from "react";
import {RoomType} from "../../../../model/room";
import {useState} from "react";
import {EditBtn} from "../editBtn/EditBtn";
import {saveRoom} from "../../../../service/room";
import styles from "./square.module.scss";

export const Square = ({room}: RoomType) => {
  const [square, setSquare] = useState(String(room.square));
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    room.square = +square;
    saveRoom(room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
  };

  return (
    <div className={styles.square}>
      <label htmlFor={`square-${room.id}`}>
        Room square
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`square-${room.id}`}
          value={square}
          onChange={(e) => setSquare(e.target.value)}
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
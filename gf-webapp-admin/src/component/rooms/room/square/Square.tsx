import * as React from "react";
import {IRoom} from "../../../../model/room";
import {useState} from "react";
import {EditBtn} from "../editBtn/EditBtn";
import {saveRoom} from "../../../../service/room";
import styles from "./square.module.scss";

interface SquareProps {
  room:IRoom;
}

export const Square = (props: SquareProps) => {
  const [square, setSquare] = useState(String(props.room.square));
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    props.room.square = +square;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
  };

  return (
    <div className={styles.square}>
      <label htmlFor={`square-${props.room.id}`}>
        Room square
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`square-${props.room.id}`}
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
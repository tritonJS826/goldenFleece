import * as React from "react";
import {IRoom} from "../../../../model/room";
import {useState} from "react";
import {EditBtn} from "../editBtn/EditBtn";
import {saveRoom} from "../../../../service/room";
import styles from "./price.module.scss";

interface ProcenProps {
  room:IRoom;
}


export const Price = (props: ProcenProps) => {
  const [price, setPrice] = useState(String(props.room.price));
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    props.room.price = +price;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
  };

  return (
    <div className={styles.price}>
      <label htmlFor={`price-${props.room.id}`}>
        Room price
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`price-${props.room.id}`}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
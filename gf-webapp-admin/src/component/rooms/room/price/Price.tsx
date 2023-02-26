import * as React from "react";
import {RoomType} from "../../../../model/room";
import {useState} from "react";
import {EditBtn} from "../editBtn/EditBtn";
import {saveRoom} from "../../../../service/room";
import styles from "./price.module.scss";

export const Price = ({room}: RoomType) => {
  const [price, setPrice] = useState(String(room.price));
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    room.price = +price;
    saveRoom(room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
  };

  return (
    <div className={styles.price}>
      <label htmlFor={`price-${room.id}`}>
        Room price
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`price-${room.id}`}
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
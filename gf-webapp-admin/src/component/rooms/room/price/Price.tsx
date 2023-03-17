import React from "react";
import {Room} from "../../../../model/Room/RoomDeprecated";
import {useState} from "react";
import {EditBtn} from "../editBtn/EditBtn";
import {saveRoom} from "../../../../service/RoomService";
import styles from "./Price.module.scss";

interface ProcenProps {
  room:Room;
}


export const Price = (props: ProcenProps) => {
  const [price, setPrice] = useState(() => props.room.price.getPriceAmount());
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    props.room.price.setNewPrice(price);
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
  };

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(Number(value));
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
          onChange={onChangePrice}
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
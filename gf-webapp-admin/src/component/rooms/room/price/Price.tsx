import * as React from "react";
import {RoomType} from "../../../../model/room";
import {useState} from "react";
import {EditBtn} from "../editBtn/EditBtn";
import {saveRoom} from "../../../../service/room";

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
    <div>
      <label htmlFor={`price-${room.id}`}>
        Room price
      </label>
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
  );
};
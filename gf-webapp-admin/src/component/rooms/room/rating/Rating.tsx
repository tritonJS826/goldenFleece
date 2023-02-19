import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";

export const Rating = ({room}: RoomType) => {
  const [rating, setRating] = useState(String(room.rating));
  const [isDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    room.rating = +rating;
    saveRoom(room);
  };

  const disabledHandler = () => {
    setIsDisabled(false);
  };
  return (
    <div>
      <label htmlFor={`rating-${room.id}`}>
        Room rating
      </label>
      <input type="number"
        id={`rating-${room.id}`}
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        disabled={isDisabled}
      />
      <EditBtn isDisabled={isDisabled}
        saveHandler={saveHandler}
        disabledHandler={disabledHandler}
      />
    </div>
  );
};
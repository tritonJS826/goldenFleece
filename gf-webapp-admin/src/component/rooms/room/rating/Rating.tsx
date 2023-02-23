import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";

export const Rating = ({room}: RoomType) => {
  const [rating, setRating] = useState(String(room.rating));
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = () => {
    setIsEditFieldDisabled(true);
    room.rating = +rating;
    saveRoom(room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
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
        disabled={isEditFieldDisabled}
      />
      <EditBtn isEditFieldDisabled={isEditFieldDisabled}
        saveHandler={saveHandler}
        fieldEditHandler={fieldEditHandler}
      />
    </div>
  );
};
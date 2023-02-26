import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";
import styles from "./rating.module.scss";

export const Rating = ({room}: RoomType) => {
  const [rating, setRating] = useState(String(room.rating));
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const ratingHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (+target.value > 10) {
      target.value = "10";
    }
    if (+target.value < 0) {
      target.value = "0";
    }
    setRating(target.value);
  };

  const saveHandler = () => {
    setIsEditFieldDisabled(true);
    room.rating = +rating;
    saveRoom(room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };
  return (
    <div className={styles.rating}>
      <label htmlFor={`rating-${room.id}`}>
        Room rating
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`rating-${room.id}`}
          value={rating}
          onChange={ratingHandler}
          disabled={isEditFieldDisabled}
          max={10}
        />
        <EditBtn isEditFieldDisabled={isEditFieldDisabled}
          saveHandler={saveHandler}
          fieldEditHandler={fieldEditHandler}
        />
      </div>
    </div>
  );
};
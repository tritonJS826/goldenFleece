import React, {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";
import styles from "./rating.module.scss";

interface RatingProps {
  room:IRoom;
}

export const Rating = (props: RatingProps) => {
  const [rating, setRating] = useState(String(props.room.rating));
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
    props.room.rating = +rating;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };
  return (
    <div className={styles.rating}>
      <label htmlFor={`rating-${props.room.id}`}>
        Room rating
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`rating-${props.room.id}`}
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
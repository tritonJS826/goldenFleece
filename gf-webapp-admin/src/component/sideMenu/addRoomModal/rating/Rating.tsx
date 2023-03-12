import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";


export const Rating = () => {
  const {room} = useContext(AddRoomContext);
  const [rating, setRating] = useState(room.rating);

  const onChangeRating = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    let value = Number(target.value);
    if (value >= 10) {
      value = 10;
    }
    setRating(value);
  };
  useEffect(() => {
    room.rating = +rating;
  }, [rating]);

  return (
    <div>
      <label htmlFor='rating'>
        Room rating
      </label>
      <input type="number"
        max={10}
        id='rating'
        value={rating}
        onChange={onChangeRating}
      />
    </div>
  );
};
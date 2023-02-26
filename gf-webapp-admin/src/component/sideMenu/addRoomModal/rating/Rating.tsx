import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";


export const Rating = () => {
  const {room} = useContext(AddRoomContext);
  const [rating, setRating] = useState(String(room.rating));

  const onChangeRating = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (+target.value >= 10) {
      target.value = "10";
    }

    setRating(target.value);
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
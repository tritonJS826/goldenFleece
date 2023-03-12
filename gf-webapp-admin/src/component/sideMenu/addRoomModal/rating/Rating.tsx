import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";


export const Rating = () => {
  const {roomStartState} = useContext(AddRoomContext);
  const [rating, setRating] = useState(roomStartState.rating);

  const onChangeRating = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    let value = Number(target.value);
    if (value >= 10) {
      value = 10;
    }
    setRating(value);
  };
  useEffect(() => {
    roomStartState.rating = rating;
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
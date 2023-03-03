import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";

export const Square = () => {
  const {room} = useContext(AddRoomContext);
  const [square, setSquare] = useState(String(room.square));

  const onChangePrice = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSquare(target.value);
  };
  useEffect(() => {
    room.square = +square;
  }, [square]);

  return (
    <div>
      <label htmlFor='square'>
        Room square
      </label>
      <input type="number"
        id='square'
        value={square}
        onChange={onChangePrice}
      />
    </div>
  );
};
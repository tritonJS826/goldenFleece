import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";

export const Square = () => {
  const {room} = useContext(AddRoomContext);
  const [square, setSquare] = useState(room.square);

  const onChangeSquare = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSquare(Number(target.value));
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
        onChange={onChangeSquare}
      />
    </div>
  );
};
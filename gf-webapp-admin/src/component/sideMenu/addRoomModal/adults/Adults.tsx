import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";


export const Adults = () => {
  const {room} = useContext(AddRoomContext);
  const [adults, setAdults] = useState(String(room.adults));

  const onChangePrice = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setAdults(target.value);
  };
  useEffect(() => {
    room.adults = +adults;
  }, [adults]);

  return (
    <div>
      <label htmlFor='adults'>
        Room adults
      </label>
      <input type="number"
        id='adults'
        value={adults}
        onChange={onChangePrice}
      />
    </div>
  );
};
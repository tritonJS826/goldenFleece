import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";


export const Price = () => {
  const {room} = useContext(AddRoomContext);
  const [price, setPrice] = useState(room.price);

  const onChangePrice = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPrice(Number(target.value));
  };
  useEffect(() => {
    room.price = price;
  }, [price]);

  return (
    <div>
      <label htmlFor='price'>
        Room price
      </label>
      <input type="number"
        id='price'
        value={price}
        onChange={onChangePrice}
      />
    </div>
  );
};
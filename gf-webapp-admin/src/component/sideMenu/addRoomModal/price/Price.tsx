import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";


export const Price = () => {
  const {roomStartState} = useContext(AddRoomContext);
  const [price, setPrice] = useState(roomStartState.price);

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  useEffect(() => {
    roomStartState.price = price;
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
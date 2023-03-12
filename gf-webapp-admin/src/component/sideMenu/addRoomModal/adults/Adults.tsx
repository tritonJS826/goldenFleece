import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";


export const Adults = () => {
  const {roomStartState} = useContext(AddRoomContext);
  const [adults, setAdults] = useState(roomStartState.adults);

  const onChangeAdults = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setAdults(Number(target.value));
  };

  useEffect(() => {
    roomStartState.adults = adults;
  }, [adults]);

  return (
    <div>
      <label htmlFor='adults'>
        Room adults
      </label>
      <input type="number"
        id='adults'
        value={adults}
        onChange={onChangeAdults}
      />
    </div>
  );
};
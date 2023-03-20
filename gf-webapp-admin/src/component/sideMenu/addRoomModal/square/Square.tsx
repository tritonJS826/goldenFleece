import {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";

export const Square = () => {
  const {roomStartState} = useContext(AddRoomContext);
  const [square, setSquare] = useState(roomStartState.square);

  const onChangeSquare = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSquare(Number(e.target.value));
  };

  useEffect(() => {
    roomStartState.square = square;
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
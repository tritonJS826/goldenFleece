import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";

export const Square = () => {
  const {room, setRoom} = useRoomContext();

  const [square, setSquare] = useState(room.square);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSquare(value);
    room.square = value;
    setRoom(room);
  };

  return (
    <div>
      <label>
        <h4>
          Room square
        </h4>
        <input type="number"
          value={square}
          onChange={onChangeValue}
        />
      </label>
    </div>
  );
};
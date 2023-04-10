import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";

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
    <label>
      <SmallTitle
        text="Room square"
      />
      <input type="number"
        value={square}
        onChange={onChangeValue}
      />
    </label>
  );
};
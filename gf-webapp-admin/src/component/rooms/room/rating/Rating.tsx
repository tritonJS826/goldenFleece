import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";


export const Rating = () => {
  const {room, setRoom} = useRoomContext();
  const [rating, setRating] = useState(room.rating);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (value > 10) {
      value = 10;
    }
    if (value < 0) {
      value = 0;
    }
    setRating(value);
    room.rating = value;
    setRoom(room);
  };

  return (
    <label>
      <SmallTitle
        text="Room rating"
      />
      <input
        type="number"
        value={rating}
        onChange={onChangeValue}
        max={10}
      />
    </label>
  );
};
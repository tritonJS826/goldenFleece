import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";

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
    <div>
      <label>
        <h4>
          Room rating
        </h4>
        <input type="number"
          value={rating}
          onChange={onChangeValue}
          max={10}
        />
      </label>
    </div>
  );
};
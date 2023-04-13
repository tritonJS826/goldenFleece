import {useState} from "react";
import {useAddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";


export const Rating = () => {
  const {room, setRoom} = useAddRoomContext();
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
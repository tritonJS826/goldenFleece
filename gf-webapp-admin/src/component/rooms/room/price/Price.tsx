import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";

export const Price = () => {

  const {room, setRoom} = useRoomContext();

  const [price, setPrice] = useState(room.price.getPriceAmount());

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPrice(value);
    room.price.setNewPrice(value);
    setRoom(room);
  };

  return (
    <div>
      <label>
        <h4>
          Room price
        </h4>
        <input type="number"
          value={price}
          onChange={onChangeValue}
        />
      </label>
    </div>
  );
};
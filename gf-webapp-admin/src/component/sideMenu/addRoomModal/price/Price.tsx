import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";
import {useState} from "react";
import {useAddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";

export const Price = () => {

  const {room, setRoom} = useAddRoomContext();
  const [price, setPrice] = useState(room.price.getPriceAmount());

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPrice(value);
    room.price.setNewPrice(value);
    setRoom(room);
  };

  return (
    <label>
      <SmallTitle
        text="Room price"
      />

      <input type="number"
        value={price}
        onChange={onChangeValue}
      />
    </label>
  );
};
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";
import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";

export const Price = () => {

  const {room, setRoom} = useRoomContext();

export const Price = (props: ProcenProps) => {
  const [price, setPrice] = useState(() => props.room.price.getPriceAmount());
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

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
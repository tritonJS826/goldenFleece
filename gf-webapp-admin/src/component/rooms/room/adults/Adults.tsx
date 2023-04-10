import {useState} from "react";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";
import {useRoomContext} from "src/component/rooms/room/roomContext";


export const Adults = () => {

  const {room, setRoom} = useRoomContext();

  const [adults, setAdults] = useState(room.adults);

  // TODO: onChangeValue repeated in many components. It will become universal when the common input component is implemented.

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAdults(value);
    room.adults = value;
    setRoom(room);
  };

  return (
    <label>
      <SmallTitle
        text="Room adults"
      />
      <input type="number"
        value={adults}
        onChange={onChangeValue}
      />
    </label>
  );
};
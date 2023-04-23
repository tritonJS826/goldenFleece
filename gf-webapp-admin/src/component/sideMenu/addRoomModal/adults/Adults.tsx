import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";
import {useState} from "react";
import {useAddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";


export const Adults = () => {
  const {room, setRoom} = useAddRoomContext();
  const [adults, setAdults] = useState(room.adults);

  const onChangeAdults = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <input
        type="number"
        value={adults}
        onChange={onChangeAdults}
      />
    </label>
  );
};
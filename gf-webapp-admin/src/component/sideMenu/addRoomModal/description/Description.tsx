import {useState} from "react";
import {useAddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";


export const Description = () => {
  const {room, setRoom} = useAddRoomContext();

  const [description, setDescription] = useState(room.description);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
    room.description = value;
    setRoom(room);
  };

  return (
    <label>
      <SmallTitle
        text="Room description"
      />
      <input type="text"
        value={description}
        onChange={onChangeValue}
        placeholder="Enter short description"
      />
    </label>
  );
};

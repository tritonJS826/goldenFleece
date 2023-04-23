import {useState} from "react";
import {useAddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";


export const LongDescription = () => {
  const {room, setRoom} = useAddRoomContext();

  const [longDescription, setLongDescription] = useState(room.descriptionLong);

  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setLongDescription(value);
    room.descriptionLong = value;
    setRoom(room);
  };
  return (
    <label>
      <SmallTitle
        text="Room long description"
      />
      <textarea
        value={longDescription}
        onChange={onChangeValue}
        placeholder="Enter full longDescription"
      />
    </label>
  );
};
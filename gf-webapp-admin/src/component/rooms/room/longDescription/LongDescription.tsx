import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";


export const LongDescription = () => {
  const {room, setRoom} = useRoomContext();

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
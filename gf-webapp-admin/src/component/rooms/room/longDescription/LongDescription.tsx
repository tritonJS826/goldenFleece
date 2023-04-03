import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";

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
    <div>
      <label>
        <h4>
          Room long longDescription
        </h4>
        <textarea
          value={longDescription}
          onChange={onChangeValue}
          placeholder="Enter full longDescription"
        />
      </label>
    </div>
  );
};
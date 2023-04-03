import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";

export const Description = () => {
  const {room, setRoom} = useRoomContext();

  const [description, setDescription] = useState(room.description);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
    room.description = value;
    setRoom(room);
  };

  return (
    <div>
      <label>
        <h4>
          Room description
        </h4>
        <input type="text"
          value={description}
          onChange={onChangeValue}
          placeholder="Enter short description"
        />
      </label>
    </div>
  );
};

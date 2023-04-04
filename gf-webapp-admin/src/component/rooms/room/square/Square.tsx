import {useState} from "react";
import {Room} from "src/model/Room/Room";
import {Button} from "gf-ui-lib/components/Button/Button";
import {saveRoom} from "src/service/RoomService";
import styles from "src/component/rooms/room/square/Square.module.scss";

interface SquareProps {
  room:Room;
}

export const Square = (props: SquareProps) => {
  const [square, setSquare] = useState(props.room.square);
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    props.room.square = square;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
  };

  return (
    <div className={styles.square}>
      <label htmlFor={`square-${props.room.id}`}>
        Room square
      </label>
      <div className={styles.container}>
        <input type="number"
          id={`square-${props.room.id}`}
          value={square}
          onChange={(e) => setSquare(Number(e.target.value))}
          disabled={isEditFieldDisabled}
        />
        <Button
          type="button"
          value={isEditFieldDisabled ? "Edit" : "Save"}
          onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
        />
      </div>
    </div>
  );
};
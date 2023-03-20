import {useState} from "react";
import {Room} from "src/model/Room/RoomDeprecated";
import {saveRoom} from "src/service/RoomService";
import {Button} from "gf-ui-lib/components/Button/Button";
import styles from "src/component/rooms/room/description/Description.module.scss";

interface DescriptionProps {
  room:Room;
}

export const Description = (props: DescriptionProps) => {
  const [description, setDescription] = useState(String(props.room.description));
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    props.room.description = description;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  return (
    <div className={styles.description}>
      <label htmlFor={`description-${props.room.id}`}>
        Room description
      </label>
      <div className={styles.container}>
        <input type="text"
          id={`description-${props.room.id}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isEditFieldDisabled}
          placeholder="Enter short description"
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
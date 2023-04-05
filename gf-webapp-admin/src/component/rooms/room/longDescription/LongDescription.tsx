import {useState} from "react";
import {Room} from "src/model/Room/Room";
import {saveRoom} from "src/service/RoomService";
import {Button} from "gf-ui-lib/components/Button/Button";
import styles from "src/component/rooms/room/longDescription/LongDescription.module.scss";

interface LongDescriptionProps {
  room:Room;
}

export const LongDescription = (props: LongDescriptionProps) => {
  const [description, setDescription] = useState(String(props.room.descriptionLong));
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = () => {
    setIsEditFieldDisabled(true);
    props.room.descriptionLong = description;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };
  return (
    <div className={styles.longDescription}>
      <label htmlFor={`description-long-${props.room.id}`}>
        Room long description
      </label>
      <div className={styles.container}>
        <textarea
          id={`description-long-${props.room.id}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isEditFieldDisabled}
          placeholder="Enter full description"
        />
        <Button
          value={isEditFieldDisabled ? "Edit" : "Save"}
          onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
          size="innerContent"
        />
      </div>
    </div>
  );
};
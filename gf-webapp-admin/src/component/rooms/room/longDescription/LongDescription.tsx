import React, {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";
import styles from "./LongDescription.module.scss";

interface LongDescriptionProps {
  room:IRoom;
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
        <EditBtn isEditFieldDisabled={isEditFieldDisabled}
          saveHandler={saveHandler}
          fieldEditHandler={fieldEditHandler}
        />
      </div>
    </div>
  );
};
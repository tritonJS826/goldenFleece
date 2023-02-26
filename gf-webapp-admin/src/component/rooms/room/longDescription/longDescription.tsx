import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";
import styles from "./longDescription.module.scss";

export const LongDescription = ({room}: RoomType) => {
  const [description, setDescription] = useState(String(room.descriptionLong));
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = () => {
    setIsEditFieldDisabled(true);
    room.descriptionLong = description;
    saveRoom(room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };
  return (
    <div className={styles.longDescription}>
      <label htmlFor={`description-long-${room.id}`}>
        Room long description
      </label>
      <div className={styles.container}>
        <textarea
          id={`description-long-${room.id}`}
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
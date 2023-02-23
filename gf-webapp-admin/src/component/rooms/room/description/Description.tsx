import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";

export const Description = ({room}: RoomType) => {
  const [description, setDescription] = useState(String(room.description));
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    room.description = description;
    saveRoom(room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  return (
    <div>
      <label htmlFor={`description-${room.id}`}>
        Room description
      </label>
      <input type="text"
        id={`description-${room.id}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={isEditFieldDisabled}
      />
      <EditBtn isEditFieldDisabled={isEditFieldDisabled}
        saveHandler={saveHandler}
        fieldEditHandler={fieldEditHandler}
      />
    </div>
  );
};
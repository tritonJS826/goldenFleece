import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";

export const Description = ({room}: RoomType) => {
  const [desc, setDesc] = useState(String(room.description));
  const [isDisabled, setIsDisabled] = useState(true);

  const saveHandler = async () => {
    setIsDisabled(true);
    room.description = desc;
    saveRoom(room);
  };

  const disabledHandler = () => {
    setIsDisabled(false);
  };

  return (
    <div>
      <label htmlFor={`desc-${room.id}`}>
        Room description
      </label>
      <input type="text"
        id={`desc-${room.id}`}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        disabled={isDisabled}
      />
      <EditBtn isDisabled={isDisabled}
        saveHandler={saveHandler}
        disabledHandler={disabledHandler}
      />
    </div>
  );
};
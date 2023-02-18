import React, {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";

export const LongDescription = ({room}: {room:IRoom}) => {
  const [desc, setDesc] = useState(String(room.descriptionLong));
  const [isDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    room.descriptionLong = desc;
    saveRoom(room);
  };

  const disabledHandler = () => {
    setIsDisabled(false);
  };
  return (
    <li>
      <label htmlFor={`desc-long-${room.id}`}>
        Room long description
      </label>
      <textarea
        id={`desc-long-${room.id}`}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        disabled={isDisabled}
      />
      <EditBtn isDisabled={isDisabled}
        saveHandler={saveHandler}
        disabledHandler={disabledHandler}
      />
    </li>
  );
};
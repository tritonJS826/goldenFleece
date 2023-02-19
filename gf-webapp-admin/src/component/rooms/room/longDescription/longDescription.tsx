import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";

export const LongDescription = ({room}: RoomType) => {
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
    <div>
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
    </div>
  );
};
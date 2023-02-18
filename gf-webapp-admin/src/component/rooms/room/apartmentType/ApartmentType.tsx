import React, {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {ROOM_TYPES} from "../../../../utils/consts";
import {EditBtn} from "../editBtn/EditBtn";


export const ApartmentsType = ({room}:{room:IRoom}) => {

  const [type, setType] = useState(room.apartmentsType);
  const [isDisabled, setIsDisabled] = useState(true);
  const roomTypes = ROOM_TYPES;

  const saveHandler = async () => {
    setIsDisabled(true);
    room.apartmentsType = type;
    saveRoom(room);
  };

  const disabledHandler = () => {
    setIsDisabled(false);
  };

  return (
    <li>
      <p>
        Room type
      </p>
      <select value={type}
        disabled={isDisabled}
        onChange={(e) => setType(e.target.value)}
      >
        {roomTypes.map(roomType => (
          <option key={roomType}
            value={roomType}
          >
            {roomType}
          </option>
        ))}
      </select>
      <EditBtn isDisabled={isDisabled}
        saveHandler={saveHandler}
        disabledHandler={disabledHandler}
      />
    </li>
  );
};
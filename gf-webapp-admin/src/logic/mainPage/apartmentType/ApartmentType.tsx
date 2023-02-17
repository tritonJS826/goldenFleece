import React, {useState} from "react";
import {IRoom} from "../../../model/room";
import {RoomApi} from "../../../../autogenerated/gf-server-api/apis/RoomApi";

export const ApartmentsType = ({room}:{room:IRoom}) => {

  const [type, setType] = useState(room.apartmentsType);
  const [isDisabled, setIsDisabled] = useState(true);
  const roomApi = new RoomApi;

  const saveHandler = async () => {
    setIsDisabled(true);
    // room.apartmentsType = type;
    console.log(room);

    try {
      if (room.id) {
        const res = await roomApi.apiRoomsRoomIdPut({roomId: room.id, body: room});
        console.log("res", res);
      }
    } catch (error) {
      console.log(error);

    }

  };

  return (
    <li>
      <label htmlFor={`type-${room.id}`}>
        Room type
      </label>
      <input type="text"
        id={`type-${room.id}`}
        value={type}
        onChange={(e) => setType(e.target.value)}
        disabled={isDisabled}
      />
      {isDisabled ?
        (
          <button onClick={() => setIsDisabled(false)}>
            Edit
          </button>
        )
        :
        (
          <button onClick={saveHandler}>
            Save
          </button>
        )}
    </li>
  );
};
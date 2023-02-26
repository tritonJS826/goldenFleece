import React, {useContext} from "react";
import {postRoom} from "../../../../service/room";
import {AddRoomContext} from "../addRoomContext";

export const SubmitBtn = () => {
  const {room, errors} = useContext(AddRoomContext);


  const addRoom = async () => {
    const errs = Object.values(errors);
    console.log("errs", errs);
    await postRoom(room);
    location.reload();
  };

  return (
    <button onClick={addRoom}>
      Submit
    </button>
  );
};
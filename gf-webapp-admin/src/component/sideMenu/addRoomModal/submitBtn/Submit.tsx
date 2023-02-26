import React, {useContext} from "react";
import {postRoom} from "../../../../service/room";
import {AddRoomContext} from "../addRoomContext";
import styles from "./submitBtn.module.scss";

export const SubmitBtn = () => {
  const {room} = useContext(AddRoomContext);


  const addRoom = async () => {
    await postRoom(room);
    location.reload();
  };

  return (
    <button className={styles.submitBtn}
      onClick={addRoom}
    >
      Submit
    </button>
  );
};
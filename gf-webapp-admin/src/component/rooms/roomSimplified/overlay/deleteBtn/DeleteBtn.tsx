import React from "react";
import {IRoom} from "../../../../../model/room";
import {deleteRoom} from "../../../../../service/room";
import styles from "./deleteBtn.module.scss";

interface BtnProps {
  room: IRoom
}

export const DeleteBtn = (props: BtnProps) => {
  const deleteRoomHandler = () => {
    if (props.room.id) {
      deleteRoom(props.room.id);
      location.reload();
    }
  };

  return(
    <button className={styles.deleteBtn}
      onClick={deleteRoomHandler}
    >
      Delete
    </button>
  );
};
import React from "react";
import {Room} from "../../../../../model/Room/RoomDeprecated";
import {deleteRoom} from "../../../../../service/RoomService";
import styles from "./DeleteBtn.module.scss";

interface BtnProps {
  room: Room
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
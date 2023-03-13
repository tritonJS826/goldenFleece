import React from "react";
import {RoomType} from "../../../../../model/room";
import {deleteRoom} from "../../../../../service/room";
import styles from "./DeleteBtn.module.scss";

export const DeleteBtn = ({room}: RoomType) => {
  const deleteRoomHandler = () => {
    if (room.id) {
      deleteRoom(room.id);
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
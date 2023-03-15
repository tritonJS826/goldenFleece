import {useContext} from "react";
import {postRoom} from "../../../../service/room";
import {AddRoomContext} from "../addRoomContext";
import styles from "./SubmitBtn.module.scss";

export const SubmitBtn = () => {
  const {roomStartState} = useContext(AddRoomContext);


  const addRoom = async () => {
    await postRoom(roomStartState);
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
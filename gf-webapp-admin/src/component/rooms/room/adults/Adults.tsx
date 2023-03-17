import React, {useState} from "react";
import {Room} from "../../../../model/Room/RoomDeprecated";
import {EditBtn} from "../editBtn/EditBtn";
import {saveRoom} from "../../../../service/RoomService";
import styles from "./adults.module.scss";

interface AdultsProps {
  room:Room;
}

export const Adults = (props: AdultsProps) => {
  const [adults, setAdults] = useState(props.room.adults);
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    props.room.adults = adults;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
  };

  return (
    <div className={styles.adults}>
      <label>
        <h4 className={styles.title}>
          Room adults
        </h4>
        <div className={styles.container}>
          <input type="number"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            disabled={isEditFieldDisabled}
          />
          <EditBtn isEditFieldDisabled={isEditFieldDisabled}
            saveHandler={saveHandler}
            fieldEditHandler={fieldEditHandler}
          />
        </div>
      </label>
    </div>
  );
};
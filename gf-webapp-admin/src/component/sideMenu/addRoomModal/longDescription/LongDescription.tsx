import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";
import styles from "./LongDescription.module.scss";

export const LongDescription = () => {
  const {roomStartState} = useContext(AddRoomContext);
  const [descriptionLong, setDescriptionLong] = useState(String(roomStartState.descriptionLong));

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionLong(e.target.value);
  };

  useEffect(() => {
    roomStartState.descriptionLong = descriptionLong;
  }, [descriptionLong]);

  return (
    <div className={styles.descriptionLong}>
      <label htmlFor='descriptionLong'>
        Room long description
      </label>
      <textarea
        id='descriptionLong'
        value={descriptionLong}
        onChange={onChangeDescription}
        placeholder="Enter full description of the room"
      />
    </div>
  );
};
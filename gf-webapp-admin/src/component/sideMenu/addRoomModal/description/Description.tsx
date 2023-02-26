import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";
import styles from "./descriprion.module.scss";

export const Description = () => {
  const {room, errors} = useContext(AddRoomContext);
  const [description, setDescription] = useState(String(room.description));

  const onChangeDescription = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length > 10) {
      errors.description = "";
    } else {
      errors.description = "Description must be more than 10 symbols";
    }
    setDescription(target.value);
  };

  useEffect(() => {
    room.description = description;
  }, [description]);

  return (
    <div className={styles.description}>
      <label htmlFor='description'>
        Room description
      </label>
      <input type="text"
        id='description'
        value={description}
        onChange={onChangeDescription}
        placeholder='Enter short description'
      />
    </div>
  );
};
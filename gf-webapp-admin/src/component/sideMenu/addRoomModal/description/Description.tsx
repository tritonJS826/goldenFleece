import {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import styles from "src/component/sideMenu/addRoomModal/description/Description.module.scss";

export const Description = () => {
  const {roomStartState} = useContext(AddRoomContext);
  const [description, setDescription] = useState(String(roomStartState.description));

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    roomStartState.description = description;
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
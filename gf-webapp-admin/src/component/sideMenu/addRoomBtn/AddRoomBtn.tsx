import React, {useState} from "react";
import styles from "./addRoomBtn.module.scss";

export const AddRoomBtn = () => {
  const [addRoom, setAddRoom] = useState(false);

  return (
    <div className={styles.addRoomBtn}>
      <span className={styles.cross} />
      <span onClick={() => setAddRoom(prev => !prev)}>
        AddRoom
      </span>
      {addRoom && (<div>
        add
      </div>)}
    </div>
  );
};
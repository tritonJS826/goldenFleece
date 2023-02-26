import React from "react";
import {ROOM_TYPES} from "../../../../../utils/roomConstants";
import styles from "./apartmentsList.module.scss";
interface IApartments {
  type: string | undefined;
  isEditFieldDisabled: boolean;
  onChangeApatrmentType: (e: React.ChangeEvent) => void;
}

export const ApartmentsList = ({type, isEditFieldDisabled, onChangeApatrmentType}: IApartments) => {
  return (
    <select className={styles.list}
      value={type}
      disabled={isEditFieldDisabled}
      onChange={onChangeApatrmentType}
    >
      {ROOM_TYPES.map(roomType => (
        <option key={roomType}
          value={roomType}
        >
          {roomType}
        </option>
      ))}
    </select>
  );
};
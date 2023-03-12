import React from "react";
import {ROOM_TYPES} from "../../../../../utils/roomConstants";
import styles from "./apartmentsList.module.scss";
interface ApartmentsProps {
  type: string | undefined;
  isEditFieldDisabled: boolean;
  onChangeApatrmentType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ApartmentsList = (porps: ApartmentsProps) => {
  return (
    <select className={styles.list}
      value={porps.type}
      disabled={porps.isEditFieldDisabled}
      onChange={porps.onChangeApatrmentType}
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
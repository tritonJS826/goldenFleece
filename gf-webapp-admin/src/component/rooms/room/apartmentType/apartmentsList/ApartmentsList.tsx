import React from "react";
import {ROOM_TYPES} from "../../../../../utils/roomConstants";
import styles from "./ApartmentsList.module.scss";

interface ApartmentsListProps {
  type: string;
  isEditFieldDisabled: boolean;
  onChangeApatrmentType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ApartmentsList = (props: ApartmentsListProps) => {
  const renderApartmens = () =>
    ROOM_TYPES.map(roomType => (
      <option key={roomType}
        value={roomType}
      >
        {roomType}
      </option>
    ));

  return (
    <select className={styles.list}
      value={props.type}
      disabled={props.isEditFieldDisabled}
      onChange={props.onChangeApatrmentType}
    >
      {renderApartmens()}
    </select>
  );
};
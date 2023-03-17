import React from "react";
import {Apartments} from "../../../../../model/Room/Apartments";
import styles from "./ApartmentsList.module.scss";

interface ApartmentsListProps {
  apartmentsType: string;
  isEditFieldDisabled: boolean;
  onChangeApartmentType: (apartmentType: Apartments) => void;
}

export const ApartmentsList = (props: ApartmentsListProps) => {
  const renderApartments = () =>
    Object.keys(Apartments).map(roomType => (
      <option key={roomType}
        value={roomType}
      >
        {roomType}
      </option>
    ));

  return (
    <select className={styles.list}
      value={props.apartmentsType}
      disabled={props.isEditFieldDisabled}
      onChange={(e) => props.onChangeApartmentType(e.target.value as Apartments)}
    >
      {renderApartments()}
    </select>
  );
};
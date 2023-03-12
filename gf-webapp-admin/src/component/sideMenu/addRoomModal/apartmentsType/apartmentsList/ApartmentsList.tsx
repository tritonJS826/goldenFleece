import React, {useContext, useEffect, useState} from "react";
import {ROOM_TYPES} from "../../../../../utils/roomConstants";
import {AddRoomContext} from "../../addRoomContext";
import styles from "./apartmentList.module.scss";

export const ApartmentsList = () => {
  const {roomStartState} = useContext(AddRoomContext);

  const [apartmentType, setApartmentType] = useState(roomStartState.apartmentsType);

  const onChangeApatrmentType = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    setApartmentType(target.value);
  };

  useEffect(() => {
    roomStartState.apartmentsType = apartmentType;
  }, [apartmentType]);

  return (
    <select className={styles.list}
      value={apartmentType}
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
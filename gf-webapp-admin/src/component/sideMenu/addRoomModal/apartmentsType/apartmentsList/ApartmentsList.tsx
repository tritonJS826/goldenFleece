import {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../../addRoomContext";
import {Apartments} from "../../../../../model/Room/Apartments";
import styles from "./ApartmentList.module.scss";

export const ApartmentsList = () => {
  const {roomStartState} = useContext(AddRoomContext);

  const [apartmentType, setApartmentType] = useState(roomStartState.apartmentsType);

  const onChangeApatrmentType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setApartmentType(e.target.value as Apartments);
  };

  useEffect(() => {
    roomStartState.apartmentsType = apartmentType;
  }, [apartmentType]);

  return (
    <select
      className={styles.list}
      value={apartmentType}
      onChange={onChangeApatrmentType}
    >
      {Object.keys(Apartments).map(roomType => (
        <option key={roomType}
          value={roomType}
        >
          {roomType}
        </option>
      ))}
    </select>
  );
};
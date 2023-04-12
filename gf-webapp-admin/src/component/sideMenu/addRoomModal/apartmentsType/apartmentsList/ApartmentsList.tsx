import {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {RoomType} from "src/model/Room/RoomType";
import styles from "src/component/sideMenu/addRoomModal/apartmentsType/apartmentsList/ApartmentList.module.scss";

export const ApartmentsList = () => {
  const {roomStartState} = useContext(AddRoomContext);

  const [apartmentType, setApartmentType] = useState(roomStartState.type);

  const onChangeApatrmentType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setApartmentType(e.target.value as RoomType);
  };

  useEffect(() => {
    roomStartState.type = apartmentType;
  }, [apartmentType]);

  return (
    <select
      className={styles.list}
      value={apartmentType}
      onChange={onChangeApatrmentType}
    >
      {Object.keys(RoomType).map(roomType => (
        <option key={roomType}
          value={roomType}
        >
          {roomType}
        </option>
      ))}
    </select>
  );
};
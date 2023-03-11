import React, {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";
import {ApartmentsList} from "./apartmentsList/ApartmentsList";
import styles from "./apartmentType.module.scss";

interface ApartmentsTypeProps {
  room:IRoom;
}

export const ApartmentsType = (porps: ApartmentsTypeProps) => {

  const [type, setType] = useState(porps.room.apartmentsType);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    porps.room.apartmentsType = type;
    saveRoom(porps.room);
  };

  const onChangeApatrmentType = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    setType(target.value);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  return (
    <div className={styles.apartments}>
      <h4 className={styles.apartmentsTitle}>
        Room type
      </h4>
      <div className={styles.container}>
        <ApartmentsList type={type}
          isEditFieldDisabled={isEditFieldDisabled}
          onChangeApatrmentType={onChangeApatrmentType}
        />
        <EditBtn isEditFieldDisabled={isEditFieldDisabled}
          saveHandler={saveHandler}
          fieldEditHandler={fieldEditHandler}
        />
      </div>
    </div>
  );
};
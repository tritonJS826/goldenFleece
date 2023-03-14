import React, {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {Button} from "../../../Button/Button";
import {ApartmentsList} from "./apartmentsList/ApartmentsList";
import styles from "./ApartmentType.module.scss";

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

  const onChangeApatrmentType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
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
        <Button
          value={isEditFieldDisabled ? "Edit" : "Save"}
          onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
        />
      </div>
    </div>
  );
};
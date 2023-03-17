import React, {useState} from "react";
import {Room} from "../../../../model/Room/Room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";
import {ApartmentsList} from "./apartmentsList/ApartmentsList";
import styles from "./ApartmentType.module.scss";

interface ApartmentsTypeProps {
  room:Room;
}

export const ApartmentsType = (props: ApartmentsTypeProps) => {
  const [type, setType] = useState(props.room.apartmentsType);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    props.room.apartmentsType = type;
    saveRoom(props.room);
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
        <EditBtn isEditFieldDisabled={isEditFieldDisabled}
          saveHandler={saveHandler}
          fieldEditHandler={fieldEditHandler}
        />
      </div>
    </div>
  );
};
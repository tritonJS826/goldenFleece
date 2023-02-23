import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";
import {ApartmentsList} from "./apartmentsList/ApartmentsList";


export const ApartmentsType = ({room}:RoomType) => {

  const [type, setType] = useState(room.apartmentsType);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    room.apartmentsType = type;
    saveRoom(room);
  };

  const onChangeApatrmentType = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    setType(target.value);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  return (
    <div>
      <p>
        Room type
      </p>
      <ApartmentsList type={type}
        isEditFieldDisabled={isEditFieldDisabled}
        onChangeApatrmentType={onChangeApatrmentType}
      />
      <EditBtn isEditFieldDisabled={isEditFieldDisabled}
        saveHandler={saveHandler}
        fieldEditHandler={fieldEditHandler}
      />
    </div>
  );
};
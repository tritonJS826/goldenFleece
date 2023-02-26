import React, {useContext, useEffect, useState} from "react";
import {AddRoomContext} from "../addRoomContext";

export const LongDescription = () => {
  const {room} = useContext(AddRoomContext);
  const [descriptionLong, setDescriptionLong] = useState(String(room.descriptionLong));

  const onChangeDescription = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setDescriptionLong(target.value);
  };

  useEffect(() => {
    room.descriptionLong = descriptionLong;
  }, [descriptionLong]);

  return (
    <div>
      <label htmlFor='descriptionLong'>
        Room long description
      </label>
      <textarea
        id='descriptionLong'
        value={descriptionLong}
        onChange={onChangeDescription}
      />
    </div>
  );
};
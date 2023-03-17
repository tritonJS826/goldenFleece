import React, {useState} from "react";
import {Room} from "../../../../model/Room/RoomDeprecated";
import {saveRoom} from "../../../../service/RoomService";
import {EditBtn} from "../editBtn/EditBtn";
import {changeRoomServices} from "./roomServices";
import {ApartmentServices} from "../../../../model/Room/ApartmentServices";
import styles from "./Services.module.scss";
import {enumToArray} from "../../../../utils/enumToArray";

interface ServicesProps {
  room:Room;
}
export const Services = (props: ServicesProps) => {

  const [services, setServices] = useState(props.room.services);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    props.room.services = services;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  const onChangeRoomServices = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = e.target.value as unknown as ApartmentServices;
    setServices(roomCurrentServices => changeRoomServices(roomCurrentServices, selectedService));
  };

  const renderServices = () =>
    enumToArray(ApartmentServices).map(service => (
      <li className={styles.service}
        key={service}
      >
        <input id={`${service}-service-${props.room.id}`}
          type="checkbox"
          value={service}
          defaultChecked={enumToArray(services).includes(service)}
          onChange={onChangeRoomServices}
          disabled={isEditFieldDisabled}
        />
        <label className={styles.label}
          htmlFor={`${service}-service-${props.room.id}`}
        >
          {service}
        </label>
      </li>
    ));


  return (
    <div className={styles.services}>
      <p className={styles.title}>
        Room services
      </p>
      <ul className={styles.container}>
        {renderServices()}
      </ul>
      <EditBtn isEditFieldDisabled={isEditFieldDisabled}
        saveHandler={saveHandler}
        fieldEditHandler={fieldEditHandler}
      />
    </div>
  );
};
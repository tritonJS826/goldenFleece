import React, {useState} from "react";
import {Room} from "../../../../model/Room/Room";
import {saveRoom} from "../../../../service/room";
import {EditBtn} from "../editBtn/EditBtn";
import styles from "./Services.module.scss";
import {changeRoomServices} from "./roomServices";
import {ApartmentServices} from "../../../../model/Room/ApartmentServices";

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

  const renderServices = (roomServices: ApartmentServices[]) =>
    roomServices.map(service => (
      <li className={styles.service}
        key={service}
      >
        <input id={`${service}-service-${props.room.id}`}
          type="checkbox"
          value={service}
          defaultChecked={services.indexOf(service) !== -1}
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
        {renderServices(props.room.services)}
      </ul>
      <EditBtn isEditFieldDisabled={isEditFieldDisabled}
        saveHandler={saveHandler}
        fieldEditHandler={fieldEditHandler}
      />
    </div>
  );
};
import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {BASE_SERVICES} from "../../../../utils/consts";
import {EditBtn} from "../editBtn/EditBtn";
import styles from "./services.module.scss";

export const Services = ({room}: RoomType) => {

  const roomServices = room.services?.split(",").map(el => el.trim());
  const [services, setServices] = useState(roomServices);
  const [isDisabled, setIsDisabled] = useState(true);
  const baseServices = BASE_SERVICES;

  const saveHandler = async () => {
    setIsDisabled(true);
    room.services = services?.join(", ").trim();
    saveRoom(room);
  };

  const disabledHandler = () => {
    setIsDisabled(false);
  };

  const handleChange = (e:React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setServices(prev => prev?.indexOf(target.value) === -1 ?
      [...prev, target.value]
      :
      prev?.filter(value => value !== target.value));
  };

  return (
    <div className={styles.services}>
      <p>
        Room services
      </p>
      <ul className={styles.servicesContainer}>
        {baseServices.map(service => (
          <li className={styles.service}
            key={service}
          >
            <input id={`${service}-service-${room.id}`}
              type="checkbox"
              value={service}
              defaultChecked={services?.indexOf(service) !== -1}
              onChange={(e) => handleChange(e)}
              disabled={isDisabled}
            />
            <label htmlFor={`${service}-service-${room.id}`}>
              {service}
            </label>
          </li>
        ))}
      </ul>
      <EditBtn isDisabled={isDisabled}
        saveHandler={saveHandler}
        disabledHandler={disabledHandler}
      />
    </div>
  );
};
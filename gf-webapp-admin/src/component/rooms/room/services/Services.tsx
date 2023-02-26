import React, {useState} from "react";
import {RoomType} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {BASE_SERVICES} from "../../../../utils/roomConstants";
import {EditBtn} from "../editBtn/EditBtn";
import styles from "./services.module.scss";
import {changeRoomServices} from "./roomServices";

export const Services = ({room}: RoomType) => {

  const roomServices = room.services?.split(",").map(el => el.trim());
  const [services, setServices] = useState(roomServices);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    room.services = services?.join(", ").trim();
    saveRoom(room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  const onChangeRoomServices = (e:React.ChangeEvent) => {
    const selectedService = e.target as HTMLInputElement;
    setServices(roomCurrentServices => changeRoomServices(roomCurrentServices, selectedService.value));
  };

  return (
    <div className={styles.services}>
      <p className={styles.title}>
        Room services
      </p>
      <ul className={styles.container}>
        {BASE_SERVICES.map(service => (
          <li className={styles.service}
            key={service}
          >
            <input id={`${service}-service-${room.id}`}
              type="checkbox"
              value={service}
              defaultChecked={services?.indexOf(service) !== -1}
              onChange={onChangeRoomServices}
              disabled={isEditFieldDisabled}
            />
            <label className={styles.label}
              htmlFor={`${service}-service-${room.id}`}
            >
              {service}
            </label>
          </li>
        ))}
      </ul>
      <EditBtn isEditFieldDisabled={isEditFieldDisabled}
        saveHandler={saveHandler}
        fieldEditHandler={fieldEditHandler}
      />
    </div>
  );
};
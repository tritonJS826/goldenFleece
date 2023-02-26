import React, {useContext, useEffect, useState} from "react";
import {BASE_SERVICES} from "../../../../utils/roomConstants";
import {AddRoomContext} from "../addRoomContext";
import {changeRoomServices} from "./roomServices";
import styles from "./services.module.scss";


export const Services = () => {
  const {room} = useContext(AddRoomContext);
  const roomServices = room.services?.split(",").filter(el => el !== "").map(el => el.trim());
  const [services, setServices] = useState(roomServices);

  const onChangeRoomServices = (e:React.ChangeEvent) => {
    const selectedService = e.target as HTMLInputElement;
    setServices(roomCurrentServices => changeRoomServices(roomCurrentServices, selectedService.value));
  };

  useEffect(() => {
    room.services = services.join(", ");
  }, [services]);

  return (
    <div className={styles.services}>
      <p className={styles.title}>
        Room services
      </p>
      <ul className={styles.servicesContainer}>
        {BASE_SERVICES.map(service => (
          <li className={styles.service}
            key={service}
          >
            <input id={`${service}-service`}
              type="checkbox"
              value={service}
              onChange={onChangeRoomServices}
            />
            <label className={styles.label}
              htmlFor={`${service}-service`}
            >
              {service}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
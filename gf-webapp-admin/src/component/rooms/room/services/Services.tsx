import React, {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {BASE_SERVICES} from "../../../../utils/roomConstants";
import {Button} from "../../../Button/Button";
import {changeRoomServices} from "./roomServices";
import styles from "./Services.module.scss";

interface ServicesProps {
  room:IRoom;
}

export const Services = (props: ServicesProps) => {

  const roomServices = props.room.services?.split(",").map(el => el.trim());
  const [services, setServices] = useState(roomServices);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    props.room.services = services.join(", ").trim();
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  const onChangeRoomServices = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = e.target.value;
    setServices(roomCurrentServices => changeRoomServices(roomCurrentServices, selectedService));
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
            <input id={`${service}-service-${props.room.id}`}
              type="checkbox"
              value={service}
              defaultChecked={services?.indexOf(service) !== -1}
              onChange={onChangeRoomServices}
              disabled={isEditFieldDisabled}
            />
            <label className={styles.label}
              htmlFor={`${service}-service-${props.room.id}`}
            >
              {service}
            </label>
          </li>
        ))}
      </ul>
      <Button
        value={isEditFieldDisabled ? "Edit" : "Save"}
        onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
      />
    </div>
  );
};
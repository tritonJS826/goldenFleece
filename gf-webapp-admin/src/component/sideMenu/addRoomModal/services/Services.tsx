import {useContext, useEffect, useState} from "react";
import {RoomServices} from "src/model/Room/RoomServices";
import {BASE_SERVICES} from "src/utils/roomConstants";
import {AddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {changeRoomServices} from "src/component/sideMenu/addRoomModal/services/roomServices";
import styles from "src/component/sideMenu/addRoomModal/services/Services.module.scss";

export const Services = () => {
  const {roomStartState} = useContext(AddRoomContext);
  const [services, setServices] = useState(roomStartState.services);
  const validServices: string[] = Object.values(RoomServices);

  const isValidService = (inputServices: string): inputServices is RoomServices => {
    return validServices.includes(inputServices);
  };

  const onChangeRoomServices = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = e.target.value;
    if (isValidService(selectedService)) {
      setServices(roomCurrentServices => changeRoomServices(roomCurrentServices, selectedService));
    }
  };

  useEffect(() => {
    roomStartState.services = services;
  }, [services]);

  const renderBaseServicesList = () => {
    return BASE_SERVICES.map(service => (
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
    ));
  };

  return (
    <div className={styles.services}>
      <p className={styles.title}>
        Room services
      </p>
      <ul className={styles.servicesContainer}>
        {renderBaseServicesList()}
      </ul>
    </div>
  );
};
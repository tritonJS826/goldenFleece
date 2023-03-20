import {useContext, useEffect, useState} from "react";
import {ApartmentServices} from "src/model/Room/ApartmentServices";
import {BASE_SERVICES} from "src/utils/roomConstants";
import {AddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {changeRoomServices} from "src/component/sideMenu/addRoomModal/services/roomServices";
import styles from "src/component/sideMenu/addRoomModal/services/Services.module.scss";

export const Services = () => {
  const {roomStartState} = useContext(AddRoomContext);
  const [services, setServices] = useState(roomStartState.services);

  const onChangeRoomServices = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = e.target.value as unknown as ApartmentServices;
    setServices(roomCurrentServices => changeRoomServices(roomCurrentServices, selectedService));
  };

  useEffect(() => {
    roomStartState.services = services;
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
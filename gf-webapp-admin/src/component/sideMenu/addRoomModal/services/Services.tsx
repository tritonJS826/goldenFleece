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

  const updateRoomServices = () => {
    room.services = services;
    setRoom(room);
  };

  updateRoomServices();

  const renderServices = () =>
    enumToArray(ApartmentServices).map(service => (
      <li
        className={styles.service}
        key={service}
      >
        <label className={styles.label}>
          <input
            type="checkbox"
            value={service}
            defaultChecked={enumToArray(services).includes(service)}
            onChange={onChangeRoomServices}
          />
          <span className={styles.seviceName}>
            {service}
          </span>
        </label>
      </li>
    ));

  return (
    <div className={styles.services}>
      <SmallTitle
        text="Room services"
      />
      <ul className={styles.container}>
        {renderServices()}
      </ul>
    </div>
  );
};
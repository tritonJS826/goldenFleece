import {useState} from "react";
import {changeRoomServices} from "./roomServices";
import {ApartmentServices} from "src/model/Room/ApartmentServices";
import {enumToArray} from "src/utils/enumToArray";
import {useAddRoomContext} from "src/component/sideMenu/addRoomModal/addRoomContext";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";
import styles from "src/component/rooms/room/services/Services.module.scss";

export const Services = () => {

  const {room, setRoom} = useAddRoomContext();
  const [services, setServices] = useState(room.services);
  const validServices: string[] = Object.values(ApartmentServices);

  const isValidService = (inputServices: string): inputServices is ApartmentServices => {
    return validServices.indexOf(inputServices) !== -1;
  };

  const onChangeRoomServices = (e: React.ChangeEvent<HTMLInputElement>) => {
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
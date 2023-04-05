import {useState} from "react";
import {changeRoomServices} from "./roomServices";
import {ApartmentServices} from "src/model/Room/ApartmentServices";
import {enumToArray} from "src/utils/enumToArray";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";
import styles from "src/component/rooms/room/services/Services.module.scss";

export const Services = () => {

  const {room, setRoom} = useRoomContext();
  const [services, setServices] = useState(room.services);

  const onChangeRoomServices = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = e.target.value as ApartmentServices;
    setServices(roomCurrentServices => changeRoomServices(roomCurrentServices, selectedService));
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
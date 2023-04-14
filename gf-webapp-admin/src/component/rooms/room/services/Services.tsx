import {useState} from "react";
import {changeRoomServices} from "./roomServices";
import {RoomServices} from "src/model/Room/RoomServices";
import {enumToArray} from "src/utils/enumToArray";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";
import styles from "src/component/rooms/room/services/Services.module.scss";

export const Services = () => {

  const {room, setRoom} = useRoomContext();
  const [services, setServices] = useState(room.services);
  const validServices: string[] = Object.values(RoomServices);

  const isValidService = (inputServices: string): inputServices is RoomServices => {
    return validServices.includes(inputServices);
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
    enumToArray(RoomServices).map(service => (
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
          <span className={styles.serviceName}>
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
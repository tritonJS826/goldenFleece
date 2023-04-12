import {RoomServices} from "src/model/Room/RoomServices";
import styles from "src/component/rooms/roomSimplified/overlay/servicesList/ServicesList.module.scss";

interface IServices {
  services: RoomServices[]
}

export const ServicesList = ({services}: IServices) => {
  return (
    <ul className={styles.services}>
      <h4>
        Services
      </h4>
      {services.map((service: RoomServices) => (
        <li key={service}>
          {service}
        </li>
      ))}
    </ul>
  );
};
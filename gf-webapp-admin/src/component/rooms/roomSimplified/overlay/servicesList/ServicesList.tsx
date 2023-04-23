import {RoomServices} from "src/model/Room/RoomServices";
import styles from "src/component/rooms/roomSimplified/overlay/servicesList/ServicesList.module.scss";

interface IServices {
  services: RoomServices[]
}

export const ServicesList = ({services}: IServices) => {

  const renderServicesList = () => {
    return services.map((service: RoomServices) => (
      <li key={service}>
        {service}
      </li>
    ));
  };

  return (
    <ul className={styles.services}>
      <h4>
        Services
      </h4>
      {renderServicesList()}
    </ul>
  );
};
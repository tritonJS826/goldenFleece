import {RoomServices} from "src/model/Room/RoomServices";
import styles from "src/component/rooms/roomSimplified/overlay/servicesList/ServicesList.module.scss";

interface Services {
  services: RoomServices[]
}

export const ServicesList = (props: Services) => {

  const renderServicesList = () => {
    return props.services.map((service: RoomServices) => (
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
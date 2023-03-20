import {ApartmentServices} from "src/model/Room/ApartmentServices";
import styles from "src/logic/rooms/roomPage/roomPromo/information/services/services.module.scss";

interface ServicesProps {
  services: ApartmentServices[];
}

export const Services = (props: ServicesProps) => {
  const renderServicesList = (roomServicesList: ApartmentServices[]) =>
    roomServicesList.map(service => (
      <li key={service}>
        {service}
      </li>
    ));
  return (
    <div className={styles.services}>
      <h3 className={styles.title}>
        Services:
      </h3>
      <ul className={styles.list}>
        {renderServicesList(props.services)}
      </ul>
    </div>
  );
};
import {RoomServices} from "src/model/Room/RoomServices";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import styles from "src/logic/rooms/roomPage/roomPromo/information/services/services.module.scss";

interface ServicesProps {
  services: RoomServices[];
}

export const Services = (props: ServicesProps) => {
  const {roomInfo} = useDictionary().dictionary;
  const renderServicesList = (roomServicesList: RoomServices[]) =>
    roomServicesList.map(service => (
      <li key={service}>
        {roomInfo.services[service]}
      </li>
    ));

  return (
    <div className={styles.services}>
      <h3 className={styles.title}>
        {roomInfo.servicesTitle}
        :
      </h3>
      <ul className={styles.list}>
        {renderServicesList(props.services)}
      </ul>
    </div>
  );
};
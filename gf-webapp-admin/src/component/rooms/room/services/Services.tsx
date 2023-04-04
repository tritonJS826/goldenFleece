import {useState} from "react";
import {Room} from "src/model/Room/Room";
import {saveRoom} from "src/service/RoomService";
import {Button} from "gf-ui-lib/components/Button/Button";
import {changeRoomServices} from "./roomServices";
import {ApartmentServices} from "src/model/Room/ApartmentServices";
import {enumToArray} from "src/utils/enumToArray";
import styles from "src/component/rooms/room/services/Services.module.scss";

interface ServicesProps {
  room:Room;
}
export const Services = (props: ServicesProps) => {

  const [services, setServices] = useState(props.room.services);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = () => {
    setIsEditFieldDisabled(true);
    props.room.services = services;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  const onChangeRoomServices = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = e.target.value as unknown as ApartmentServices;
    setServices(roomCurrentServices => changeRoomServices(roomCurrentServices, selectedService));
  };

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
            disabled={isEditFieldDisabled}
          />
          {service}
        </label>
      </li>
    ));

  return (
    <div className={styles.services}>
      <p className={styles.title}>
        Room services
      </p>
      <ul className={styles.container}>
        {renderServices()}
      </ul>
      <Button
        type="button"
        value={isEditFieldDisabled ? "Edit" : "Save"}
        onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
      />
    </div>
  );
};
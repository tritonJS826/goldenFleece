import {useState} from "react";
import {Room} from "../../../../model/Room/RoomDeprecated";
import {saveRoom} from "../../../../service/RoomService";
import {Button} from "gf-ui-lib/components/Button/Button";
import {changeRoomServices} from "./roomServices";
import {ApartmentServices} from "../../../../model/Room/ApartmentServices";
import {enumToArray} from "../../../../utils/enumToArray";
import styles from "./Services.module.scss";

interface ServicesProps {
  room:Room;
}
export const Services = (props: ServicesProps) => {

  const [services, setServices] = useState(props.room.services);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState(true);

  const saveHandler = async () => {
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
      <li className={styles.service}
        key={service}
      >
        <input id={`${service}-service-${props.room.id}`}
          type="checkbox"
          value={service}
          defaultChecked={enumToArray(services).includes(service)}
          onChange={onChangeRoomServices}
          disabled={isEditFieldDisabled}
        />
        <label className={styles.label}
          htmlFor={`${service}-service-${props.room.id}`}
        >
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
import {useState} from "react";
import {Apartments} from "../../../../model/Room/Apartments";
import {Room} from "../../../../model/Room/RoomDeprecated";
import {saveRoom} from "../../../../service/RoomService";
import {Button} from "gf-ui-lib/components/Button/Button";
import {ApartmentsList} from "./apartmentsList/ApartmentsList";
import styles from "./ApartmentType.module.scss";

interface ApartmentsTypeProps {
  room:Room;
}

export const ApartmentsType = (props: ApartmentsTypeProps) => {
  const [apartmentType, setApartmentType] = useState<Apartments>(props.room.apartmentsType);
  const [isEditFieldDisabled, setIsEditFieldDisabled] = useState<boolean>(true);

  const saveHandler = async () => {
    setIsEditFieldDisabled(true);
    props.room.apartmentsType = apartmentType;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsEditFieldDisabled(false);
  };

  return (
    <div className={styles.apartments}>
      <h4 className={styles.apartmentsTitle}>
        Room type
      </h4>
      <div className={styles.container}>
        <ApartmentsList
          apartmentsType={apartmentType}
          isEditFieldDisabled={isEditFieldDisabled}
          onChangeApartmentType={setApartmentType}
        />
        <Button
          type="button"
          value={isEditFieldDisabled ? "Edit" : "Save"}
          onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
        />
      </div>
    </div>
  );
};
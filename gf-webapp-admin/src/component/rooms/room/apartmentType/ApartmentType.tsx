import {useState} from "react";
import {Apartments} from "src/model/Room/Apartments";
import {Room} from "src/model/Room/Room";
import {saveRoom} from "src/service/RoomService";
import {Button} from "gf-ui-lib/components/Button/Button";
import {ApartmentsList} from "src/component/rooms/room/apartmentType/apartmentsList/ApartmentsList";
import styles from "src/component/rooms/room/apartmentType/ApartmentType.module.scss";

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
          value={isEditFieldDisabled ? "Edit" : "Save"}
          onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
          size="innerContent"
        />
      </div>
    </div>
  );
};
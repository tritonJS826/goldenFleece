import {Apartments} from "src/model/Room/Apartments";
import styles from "src/component/rooms/room/apartmentType/apartmentsList/ApartmentsList.module.scss";

interface ApartmentsListProps {
  apartmentsType: string;
  isEditFieldDisabled: boolean;
  onChangeApartmentType: (apartmentType: Apartments) => void;
}

export const ApartmentsList = (props: ApartmentsListProps) => {
  const renderApartments = () =>
    Object.keys(Apartments).map(roomType => (
      <option key={roomType}
        value={roomType}
      >
        {roomType}
      </option>
    ));

  return (
    <select className={styles.list}
      value={props.apartmentsType}
      disabled={props.isEditFieldDisabled}
      onChange={(e) => props.onChangeApartmentType(e.target.value as Apartments)}
    >
      {renderApartments()}
    </select>
  );
};
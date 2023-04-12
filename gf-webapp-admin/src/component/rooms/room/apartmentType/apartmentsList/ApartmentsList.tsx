import {RoomType} from "src/model/Room/RoomType";
import styles from "src/component/rooms/room/apartmentType/apartmentsList/ApartmentsList.module.scss";

interface ApartmentsListProps {
  apartmentsType: keyof typeof RoomType;
  onChangeValue: (value: string) => void;
}

export const ApartmentsList = (props: ApartmentsListProps) => {
  const renderApartments = () =>
    Object.keys(RoomType).map(roomType => (
      <option key={roomType}
        value={roomType}
      >
        {roomType}
      </option>
    ));

  return (
    <select className={styles.list}
      value={props.apartmentsType}
      onChange={(e) => props.onChangeValue(e.target.value)}
    >
      {renderApartments()}
    </select>
  );
};
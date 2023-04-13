import {Apartments} from "src/model/Room/Apartments";
import styles from "src/component/sideMenu/addRoomModal/apartmentsType/apartmentsList/ApartmentList.module.scss";

interface ApartmentsListProps {
  apartmentsType: keyof typeof Apartments;
  onChangeValue: (value: string) => void;
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
      onChange={(e) => props.onChangeValue(e.target.value)}
    >
      {renderApartments()}
    </select>
  );
};
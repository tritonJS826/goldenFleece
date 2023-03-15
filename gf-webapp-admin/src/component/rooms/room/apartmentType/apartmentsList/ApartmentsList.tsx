import {ROOM_TYPES} from "../../../../../utils/roomConstants";
import styles from "./ApartmentsList.module.scss";

interface ApartmentsListProps {
  type: string | undefined;
  isEditFieldDisabled: boolean;
  onChangeApatrmentType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ApartmentsList = (porps: ApartmentsListProps) => {
  return (
    <select className={styles.list}
      value={porps.type}
      disabled={porps.isEditFieldDisabled}
      onChange={porps.onChangeApatrmentType}
    >
      {ROOM_TYPES.map(roomType => (
        <option key={roomType}
          value={roomType}
        >
          {roomType}
        </option>
      ))}
    </select>
  );
};
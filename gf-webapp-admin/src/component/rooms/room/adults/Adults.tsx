import {useState} from "react";
import {useRoomContext} from "src/component/rooms/room/roomContext";
import styles from "src/component/rooms/room/adults/adults.module.scss";

export const Adults = () => {
  const contextAdults = useRoomContext().room.adults;

  const [adults, setAdults] = useState(contextAdults);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAdults(value);
  };

  return (
    <div className={styles.adults}>
      <label>
        <h4 className={styles.title}>
          Room adults
        </h4>
        <div className={styles.container}>
          <input type="number"
            value={adults}
            onChange={onChangeValue}
          />
        </div>
      </label>
    </div>
  );
};
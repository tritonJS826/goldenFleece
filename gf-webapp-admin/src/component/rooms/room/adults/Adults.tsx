import {useState} from "react";
import {IRoom} from "../../../../model/room";
import {saveRoom} from "../../../../service/room";
import {Button} from "gf-ui-lib/components/Button/Button";
import styles from "./adults.module.scss";

interface AdultsProps {
  room:IRoom;
}

export const Adults = (props: AdultsProps) => {
  const [adults, setAdults] = useState(props.room.adults);
  const [isEditFieldDisabled, setIsDisabled] = useState(true);

  const saveHandler = () => {
    setIsDisabled(true);
    props.room.adults = adults;
    saveRoom(props.room);
  };

  const fieldEditHandler = () => {
    setIsDisabled(false);
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
            onChange={(e) => setAdults(Number(e.target.value))}
            disabled={isEditFieldDisabled}
          />
          <Button
            type="button"
            value={isEditFieldDisabled ? "Edit" : "Save"}
            onClick={isEditFieldDisabled ? fieldEditHandler : saveHandler}
          />
        </div>
      </label>
    </div>
  );
};
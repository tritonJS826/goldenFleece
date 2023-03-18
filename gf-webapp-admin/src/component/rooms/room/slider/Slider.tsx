import {Room} from "../../../../model/Room/Room";
import {NewRoom} from "../../../../model/Room/NewRoom";
import {Slides} from "./slides/Slides";
import styles from "./Slider.module.scss";

interface SliderProps {
  room: Room | NewRoom;
}

export const Slider = (props: SliderProps) => {
  return (
    <div className={styles.slider}>
      <p className={styles.title}>
        Room slider
      </p>
      <Slides room={props.room} />
    </div>
  );
};
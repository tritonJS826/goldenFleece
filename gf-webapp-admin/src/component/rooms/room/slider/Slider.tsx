import {Room} from "src/model/Room/Room";
import {NewRoom} from "src/model/Room/NewRoom";
import {Slides} from "src/component/rooms/room/slider/slides/Slides";
import styles from "src/component/rooms/room/slider/Slider.module.scss";

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
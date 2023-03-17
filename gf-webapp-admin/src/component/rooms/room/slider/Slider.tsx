import React from "react";
import {AddRoom, Room} from "../../../../model/Room/Room";
import {Slides} from "./slides/Slides";
import styles from "./Slider.module.scss";

interface SliderProps {
  room:Room | AddRoom;
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
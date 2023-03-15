import React from "react";
import {IRoom} from "../../../../model/room";
import {Slides} from "./slides/Slides";
import styles from "./Slider.module.scss";

interface SliderProps {
  room:IRoom;
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
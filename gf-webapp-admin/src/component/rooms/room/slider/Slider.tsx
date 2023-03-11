import React from "react";
import {IRoom} from "../../../../model/room";
import styles from "./slider.module.scss";
import {Slides} from "./slides/Slides";

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
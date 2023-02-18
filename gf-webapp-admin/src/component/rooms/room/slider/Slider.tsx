import * as React from "react";
import {IRoom} from "../../../../model/room";
import {Slide} from "./slide/Slide";
import styles from "./slider.module.scss";

export const Slider = ({room}:{room:IRoom}) => {
  const slider = Object.keys(room).filter(key => key.includes("slider"));

  return (
    <li className={styles.slider}>
      <p>
        Slider
      </p>
      <ul className={styles.slides}>
        {slider.map(slide => (
          <Slide key={slide}
            room={room}
            slide={slide}
          />
        ))}
      </ul>
    </li>
  );
};
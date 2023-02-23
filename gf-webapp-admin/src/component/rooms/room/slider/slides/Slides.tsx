import React from "react";
import {RoomType} from "../../../../../model/room";
import {Slide} from "./slide/Slide";
import styles from "./slides.module.scss";

export const Slides = ({room}: RoomType) => {
  /**We will change the room model to get correct slides  */
  const slider = Object.keys(room).filter(key => key.includes("slider"));

  return (
    <ul className={styles.slides}>
      {slider.map(slide => (
        <Slide key={slide}
          room={room}
          slide={slide}
        />
      ))}
    </ul>
  );
};
import React from "react";
import {RoomType} from "../../../../model/room";
import styles from "./slider.module.scss";
import {Slides} from "./slides/Slides";

export const Slider = ({room}: RoomType) => {
  return (
    <div className={styles.slider}>
      <p>
        Slider
      </p>
      <Slides room={room} />
    </div>
  );
};
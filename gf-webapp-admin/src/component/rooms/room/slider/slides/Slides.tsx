import React from "react";
import {RoomType} from "../../../../../model/room";
import {saveRoom} from "../../../../../service/room";
import {Slide} from "./slide/Slide";
import styles from "./slides.module.scss";

export const Slides = ({room}: RoomType) => {

  const saveSliderImages = async (imageURL: string, imgIndex: number) => {
    const counts = 1;
    room.slider?.splice(imgIndex, counts, imageURL);
    saveRoom(room);
  };

  return (
    <ul className={styles.slides}>
      {room.slider?.map((slideImageURL, index) => (
        <Slide key={index}
          slideImageURL={slideImageURL}
          index={index}
          saveSliderImages={saveSliderImages}
        />
      ))}
    </ul>
  );
};
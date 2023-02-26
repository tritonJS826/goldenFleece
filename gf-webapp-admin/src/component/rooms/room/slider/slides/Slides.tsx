import React, {useEffect, useState} from "react";
import {RoomType} from "../../../../../model/room";
import {saveRoom} from "../../../../../service/room";
import {AddSlide} from "./addSlide/AddSlide";
import {Slide} from "./slide/Slide";
import styles from "./slides.module.scss";

export const Slides = ({room}: RoomType) => {

  const [slides, setSlides] = useState(room.slider);

  const deleteSlide = (slideIndex: number) => {
    setSlides(slides?.filter((_, index) => index !== slideIndex));
  };

  const addSlide = (slideImageURL:string) => {
    slideImageURL && (slides && setSlides([...slides, slideImageURL]));
  };

  useEffect(() => {
    room.slider = slides;
    saveRoom(room);
  }, [slides]);

  return (
    <ul className={styles.slides}>
      {slides?.map((slideImageURL, index) => (
        <Slide key={slideImageURL}
          slideImageURL={slideImageURL}
          index={index}
          deleteSlide={deleteSlide}
        />
      ))}
      <AddSlide addSlide={addSlide} />
    </ul>
  );
};
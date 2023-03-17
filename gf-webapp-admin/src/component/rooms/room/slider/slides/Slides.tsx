import React, {useEffect, useState} from "react";
import {Room} from "../../../../../model/Room/Room";
import {NewRoom} from "../../../../../model/Room/NewRoom";
import {saveRoom} from "../../../../../service/RoomService";
import {AddSlide} from "./addSlide/AddSlide";
import {Slide} from "./slide/Slide";
import styles from "./Slides.module.scss";

interface SlidesProps {
  room:Room | NewRoom; //adults
}

export const Slides = (props: SlidesProps) => {

  const [slides, setSlides] = useState(props.room.images);

  const deleteSlide = (slideIndex: number) => {
    setSlides(slides.filter((_, index) => index !== slideIndex));
  };

  const addSlide = (slideImageURL:string) => {
    slideImageURL && (slides && setSlides([...slides, slideImageURL]));
  };

  useEffect(() => {
    props.room.images = slides;
    saveRoom(props.room as Room);
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
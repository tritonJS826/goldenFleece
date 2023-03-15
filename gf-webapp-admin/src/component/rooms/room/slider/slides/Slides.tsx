import {useEffect, useState} from "react";
import {IRoom} from "../../../../../model/room";
import {saveRoom} from "../../../../../service/room";
import {AddSlide} from "./addSlide/AddSlide";
import {Slide} from "./slide/Slide";
import styles from "./Slides.module.scss";

interface SlidesProps {
  room:IRoom;
}

export const Slides = (props: SlidesProps) => {

  const [slides, setSlides] = useState(props.room.slider);

  const deleteSlide = (slideIndex: number) => {
    setSlides(slides?.filter((_, index) => index !== slideIndex));
  };

  const addSlide = (slideImageURL:string) => {
    slideImageURL && (slides && setSlides([...slides, slideImageURL]));
  };

  useEffect(() => {
    props.room.slider = slides;
    saveRoom(props.room);
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
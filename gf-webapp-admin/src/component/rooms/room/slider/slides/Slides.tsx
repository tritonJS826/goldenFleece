import {useEffect, useState} from "react";
import {Room} from "src/model/Room/Room";
import {NewRoom} from "src/model/Room/NewRoom";
import {saveRoom} from "src/service/RoomService";
import {AddSlide} from "src/component/rooms/room/slider/slides/addSlide/AddSlide";
import {Slide} from "src/component/rooms/room/slider/slides/slide/Slide";
import styles from "src/component/rooms/room/slider/slides/Slides.module.scss";

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
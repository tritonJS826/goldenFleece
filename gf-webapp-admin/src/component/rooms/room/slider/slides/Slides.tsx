import {useEffect, useState} from "react";
import {Room} from "src/model/Room/Room";
import {NewRoom} from "src/model/Room/NewRoom";
import {saveRoom} from "src/service/RoomService";
import {AddSlide} from "src/component/rooms/room/slider/slides/addSlide/AddSlide";
import {Slide} from "src/component/rooms/room/slider/slides/slide/Slide";
import styles from "src/component/rooms/room/slider/slides/Slides.module.scss";

interface SlidesProps {
  room:Room | NewRoom;
}

export const Slides = (props: SlidesProps) => {

  const [slides, setSlides] = useState(props.room.images);

  const deleteSlide = (slideIndex: number) => {
    setSlides(slides.filter((_, index) => index !== slideIndex));
  };

  const addSlide = (slideImageURL:string) => {
    if (slideImageURL && slides) {
      setSlides([...slides, slideImageURL]);
    }
  };

  const renderSlides = (roomSlides: string[]) =>
    roomSlides.map((slideImageURL, index) => (
      <Slide key={slideImageURL}
        slideImageURL={slideImageURL}
        index={index}
        deleteSlide={deleteSlide}
      />
    ));

  useEffect(() => {
    props.room.images = slides;
    if (props.room instanceof Room) {
      saveRoom(props.room);
    }
  }, [slides]);

  return (
    <ul className={styles.slides}>
      {renderSlides(slides)}
      <AddSlide addSlide={addSlide} />
    </ul>
  );
};
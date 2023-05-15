import {useState} from "react";
import {AddSlide} from "src/component/rooms/room/slider/slides/addSlide/AddSlide";
import {Slide} from "src/component/rooms/room/slider/slides/slide/Slide";
import styles from "src/component/rooms/room/slider/slides/Slides.module.scss";

interface SlidesProps {
  slides: string[];
  updateSlides: (slides: string[]) => void;
}

export const Slides = (props: SlidesProps) => {

  const [slides, setSlides] = useState(props.slides);

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

  props.updateSlides(slides);

  return (
    <ul className={styles.slides}>
      {renderSlides(slides)}
      <AddSlide addSlide={addSlide} />
    </ul>
  );
};
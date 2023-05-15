import {Slides} from "src/component/rooms/room/slider/slides/Slides";
import {Title} from "gf-ui-lib/src/components/Title/Title";
import {TitleLevel} from "gf-ui-lib/src/components/Title/TitleLevel";

interface SliderProps {
  slides: string[];
  titleText: string;
  updateSlides: (slides: string[]) => void;
}

export const Slider = (props: SliderProps) => {
  return (
    <div>
      <Title
        level={TitleLevel.h4}
        text={props.titleText}
      />
      <Slides
        slides={props.slides}
        updateSlides={props.updateSlides}
      />
    </div>
  );
};
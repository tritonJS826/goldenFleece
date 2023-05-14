import {Room} from "src/model/Room/Room";
import {NewRoom} from "src/model/Room/NewRoom";
import {Slides} from "src/component/rooms/room/slider/slides/Slides";
import {Title} from "gf-ui-lib/src/components/Title/Title";
import {TitleLevel} from "gf-ui-lib/src/components/Title/TitleLevel";

interface SliderProps {
  room: Room | NewRoom;
  titleText: string;
}

export const Slider = (props: SliderProps) => {
  return (
    <div>
      <Title
        level={TitleLevel.h4}
        text={props.titleText}
      />
      <Slides room={props.room} />
    </div>
  );
};
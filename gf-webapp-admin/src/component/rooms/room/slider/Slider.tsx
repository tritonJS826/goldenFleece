import {Room} from "src/model/Room/Room";
import {NewRoom} from "src/model/Room/NewRoom";
import {Slides} from "src/component/rooms/room/slider/slides/Slides";
import {Title} from "gf-ui-lib/src/components/Title/Title";


interface SliderProps {
  room: Room | NewRoom;
}

export const Slider = (props: SliderProps) => {
  return (
    <div>
      <Title
        size="h4"
        text="Room slider"
      />
      <Slides room={props.room} />
    </div>
  );
};
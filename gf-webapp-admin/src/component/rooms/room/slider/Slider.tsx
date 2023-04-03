import {Room} from "src/model/Room/Room";
import {NewRoom} from "src/model/Room/NewRoom";
import {Slides} from "src/component/rooms/room/slider/slides/Slides";

interface SliderProps {
  room: Room | NewRoom;
}

export const Slider = (props: SliderProps) => {
  return (
    <div>
      <h4>
        Room slider
      </h4>
      <Slides room={props.room} />
    </div>
  );
};
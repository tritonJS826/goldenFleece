import {Room} from "src/model/Room/Room";
import {NewRoom} from "src/model/Room/NewRoom";
import {Slides} from "src/component/rooms/room/slider/slides/Slides";
import {SmallTitle} from "gf-ui-lib/components/SmallTitle/SmallTitle";


interface SliderProps {
  room: Room | NewRoom;
}

export const Slider = (props: SliderProps) => {
  return (
    <div>
      <SmallTitle
        text="Room slider"
      />
      <Slides room={props.room} />
    </div>
  );
};
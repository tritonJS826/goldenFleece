import {FC, useContext, useState} from "react";
import {IMarker} from "./IMarker";
import {MapContext} from "../../MapContext";
import marker from "../../resources/marker-sprite.svg";
import styleMarker from "./Marker.module.scss";


export const Marker: FC<IMarker> = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const {menuItem, setMenuItem} = useContext(MapContext);

  const mouseOverHandler = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest("div")?.dataset.name === "marker";
    target && setIsMouseOver(true);
  };

  const mouseLeaveHandler = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest("div")?.dataset.name === "marker";
    target && setIsMouseOver(false);
  };

  const clickHandler = () => {
    setMenuItem(props);
  };


  return (
    <div
      data-name='marker'
      onClick={clickHandler}
      onMouseEnter={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      className={`${styleMarker[props.markerType]} ${menuItem?.id === props.id ? styleMarker.checked : null}`}
      style={{bottom: `${props.y}px`, left: `${props.x}px`}}
    >
      <svg>
        <use href={marker + "#marker"} />
      </svg>
      {isMouseOver && <span className={styleMarker.name}>
        {props.name}
      </span>}
    </div>);
};
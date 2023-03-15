import {FC, useContext, useState} from "react";
import {IMarker} from "src/component/map/mapContent/marker/IMarker";
import {MapContext} from "src/component/map/MapContext";
import marker from "src/resources/map/marker-sprite.svg";
import styleMarker from "src/component/map/mapContent/marker/Marker.module.scss";


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
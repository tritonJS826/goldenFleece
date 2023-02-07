import React, {useContext, useState} from "react";
import {IMarker} from "../../mapInterfaces";
import {MapContext} from "../../MapContext";
import styleMarker from "./marker.module.scss";

export const Marker = (props: IMarker) => {
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
    <div data-name='marker'
      onClick={clickHandler}
      onMouseEnter={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      className={`${styleMarker[props.markerType]} ${menuItem?.id === props.id ? styleMarker.checked : null}`}
      style={{bottom: `${props.y}px`, left: `${props.x}px`}}
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 365 560"
        enableBackground="new 0 0 365 560"
        xmlSpace="preserve"
      >
        <g>
          <path d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,
            187.2c0-33.6,27.2-60.8,60.8-60.8c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"
          />
        </g>
      </svg>
      {isMouseOver && <span className={styleMarker.name}>
        {props.name}
      </span>}
    </div>);
};
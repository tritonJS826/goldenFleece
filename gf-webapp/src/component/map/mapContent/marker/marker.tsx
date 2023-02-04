import React, {useState} from "react";
import {IMarker} from "../../map.interfaces";
import styleMarker from "./marker.module.scss";

export const Marker = (props: IMarker) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={clickHandler}
      className={styleMarker[props.markerType]}
      style={{top: `${props.y}px`, left: `${props.x}px`}}
      key={props.id}
    >
      {isClicked && <span className={styleMarker.name}>
        {props.name}
      </span>}
    </div>);
};
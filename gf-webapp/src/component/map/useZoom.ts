import {useState} from "react";

export function useZoom() {
  const INITIAL_SCALE = 1.0;
  const MAX_SCALE = 1.5;
  const MIN_SCALE = 0.5;
  const SCALE_CHANGE_STEP = 0.1;
  const [scale, setScale] = useState(INITIAL_SCALE);

  function zoomInHandler() {
    if (scale < MAX_SCALE) {
      setScale((prev) => Number((prev + SCALE_CHANGE_STEP).toFixed(1)));
    } else {
      return;
    }
  }

  function zoomOutHandler() {
    if (scale > MIN_SCALE) {
      setScale((prev) => Number((prev - SCALE_CHANGE_STEP).toFixed(1)));
    } else {
      return;
    }
  }

  return {scale, zoomInHandler, zoomOutHandler};
}

import {useState} from "react";

export function useZoom() {
  const [scale, setScale] = useState(1.0);

  function zoomInHandler() {
    if (scale < 1.5) {
      setScale((prev) => Number((prev + 0.1).toFixed(1)));
    } else {
      return;
    }
  }

  function zoomOutHandler() {
    if (scale > 0.5) {
      setScale((prev) => Number((prev - 0.1).toFixed(1)));
    } else {
      return;
    }
  }

  return {scale, zoomInHandler, zoomOutHandler};
}

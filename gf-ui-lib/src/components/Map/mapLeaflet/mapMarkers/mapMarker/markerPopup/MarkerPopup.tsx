import {PointExpression} from "leaflet";
import {Popup} from "react-leaflet";

/**
 * Marker Popup props
 */
interface MarkerPopupProps {
  /**
   * Sets popup position
   */
  popupOffset: PointExpression
  /**
   * Marker Popup text
   */
  popupText: string
}

/**
 * Marker popup component
 */
export const MarkerPopup = (props: MarkerPopupProps) => {
  return (
    <Popup offset={props.popupOffset}>
      {props.popupText}
    </Popup>
  );
};
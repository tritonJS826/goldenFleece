import {Icon, IconOptions, LatLngExpression, PointExpression} from "leaflet";
import {useEffect, useRef} from "react";
import {Marker} from "react-leaflet";
import {MarkerPopup} from "./markerPopup/MarkerPopup";

/**
 * Map Marker props
 */
interface MapMarkerProps {
  /**
 * Sets map marker position on the map
 */
  markerPosition: LatLngExpression
  /**
 * Sets map marker icon
 */
  markerIcon: Icon<IconOptions>
  /**
 * Callback triggered on interaction with marker
 */
  eventHandlers: object
  /**
 * Sets popup position
 */
  popupOffset: PointExpression
  /**
 * Marker Popup text
 */
  popupText: string
  /**
 * Sets which popup should be open
 */
  popupOpen: boolean
}

/**
 * Map marker component
 */
export const MapMarker = (props: MapMarkerProps) => {
  const markerRef = useRef<L.Marker>(null);

  /**
   * Opens a popup with information about the selected location
   */
  useEffect(() => {
    setTimeout(() => {
      if (props.popupOpen) {
        if (markerRef.current) {
          markerRef.current.openPopup();
        }
      }
    }, 300);
  }, [props.popupOpen]);

  return (
    <Marker
      position={props.markerPosition}
      icon={props.markerIcon}
      eventHandlers={props.eventHandlers}
      ref={markerRef}
    >
      <MarkerPopup
        popupOffset={props.popupOffset}
        popupText={props.popupText}
      />
    </Marker>
  );
};
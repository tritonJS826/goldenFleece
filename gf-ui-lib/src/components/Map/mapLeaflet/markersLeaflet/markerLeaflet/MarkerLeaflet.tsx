import {DivIcon, Icon, IconOptions, LatLngExpression, PointExpression} from "leaflet";
import {useEffect, useRef} from "react";
import {Marker, Popup} from "react-leaflet";

interface MarkerLeafletProps {
  markerPosition: LatLngExpression
  markerIcon: Icon<IconOptions> | DivIcon
  eventHandlers: object
  popupOffset: PointExpression
  popupText: string
  popupOpen: boolean
}

export const MarkerLeaflet = (props: MarkerLeafletProps) => {
  const markerRef = useRef<L.Marker>(null);

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
      <Popup offset={props.popupOffset}>
        {props.popupText}
      </Popup>
    </Marker>
  );
};
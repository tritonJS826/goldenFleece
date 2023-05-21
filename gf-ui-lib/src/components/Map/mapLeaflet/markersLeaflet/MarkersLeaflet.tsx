import {Icon} from "leaflet";
import {useContext} from "react";
import {MapContext} from "../../MapContext";
import {MarkerLeaflet} from "./markerLeaflet/MarkerLeaflet";

const ICON_WIDTH = 60;
const ICON_HEIGHT = 60;
const ICON_ANCHOR_X = 29;
const ICON_ANCHOR_Y = 50;
const POPUP_OFFSET_X = 0;
const POPUP_OFFSET_Y = -40;

export const MarkersLeaflet = () => {
  const {setMenuItem, markers, menuItem} = useContext(MapContext);

  const renderMarkers = () => {
    return markers.map((marker) => (
      <MarkerLeaflet
        key={marker.id}
        markerPosition={[marker.x, marker.y]}
        markerIcon={new Icon({
          iconUrl: marker.markerIconUrl,
          iconSize: [ICON_WIDTH, ICON_HEIGHT],
          iconAnchor: [ICON_ANCHOR_X, ICON_ANCHOR_Y],
        })}
        eventHandlers={{click: () => setMenuItem(marker)}}
        popupOffset={[POPUP_OFFSET_X, POPUP_OFFSET_Y]}
        popupText={marker.name}
        openPopup={menuItem?.id === marker.id}
      />
    ));
  };

  return (
    <>
      {renderMarkers()}
    </>
  );
};
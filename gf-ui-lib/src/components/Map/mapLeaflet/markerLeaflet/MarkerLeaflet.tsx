import {Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet";
import {useContext} from "react";
import {MapContext} from "../../MapContext";

export const MarkerLeaflet = () => {
  const {menuItem, setMenuItem, markers} = useContext(MapContext);

  const renderMarkers = () => {
    return markers.map((marker) => (
      <Marker
        key={marker.id}
        position={[marker.x, marker.y]}
        icon={new Icon({iconUrl: marker.markerIconUrl, iconSize: [60, 60], iconAnchor: [29, 50]})}
        eventHandlers={{click: () => setMenuItem(marker)}}
      >
        <Popup offset={[0, -40]}>
          {marker.name}
        </Popup>
      </Marker>
    ));
  };

  return (
    <>
      {renderMarkers()}
    </>
  );
};
import {useContext, useEffect} from "react";
import {MapContainer, TileLayer, ZoomControl, useMap} from "react-leaflet";
import {MarkersLeaflet} from "./markersLeaflet/MarkersLeaflet";
import {MapContext} from "../MapContext";
import "leaflet/dist/leaflet.css";
import styles from "./MapLeaflet.module.scss";

const MAP_CENTER_X = 42.24625;
const MAP_CENTER_Y = 42.68017;
const MAP_DEFAULT_ZOOM = 15;

interface ICenterOnMarkerProps {
  latitude?: number
  longitude?: number
}

export const MapLeaflet = () => {
  const {menuItem} = useContext(MapContext);

  const CenterOnMarker = (props: ICenterOnMarkerProps) => {
    const map = useMap();
    useEffect(() => {
      if (props.latitude && props.longitude) {
        map.setView([props.latitude, props.longitude]);
      }
    }, [props.latitude, props.longitude]);
    return null;
  };

  return (
    <MapContainer
      className={styles.map_container}
      center={[MAP_CENTER_X, MAP_CENTER_Y]}
      zoom={MAP_DEFAULT_ZOOM}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <ZoomControl position="topright" />
      <CenterOnMarker
        latitude={menuItem?.x}
        longitude={menuItem?.y}
      />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkersLeaflet />
    </MapContainer>
  );
};
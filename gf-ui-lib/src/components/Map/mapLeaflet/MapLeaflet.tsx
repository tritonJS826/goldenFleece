import {MapContainer, TileLayer, ZoomControl} from "react-leaflet";
import {CenterOnMarker} from "./centerOnMarker/CenterOnMarker";
import {MapMarkers} from "./mapMarkers/MapMarkers";
import "leaflet/dist/leaflet.css";
import styles from "./MapLeaflet.module.scss";

const MAP_CENTER_X = 42.24625;
const MAP_CENTER_Y = 42.68017;
const MAP_DEFAULT_ZOOM = 15;

/**
 * The component that renders the map
 */
export const MapLeaflet = () => {
  return (
    <MapContainer
      className={styles.map_container}
      center={[MAP_CENTER_X, MAP_CENTER_Y]}
      zoom={MAP_DEFAULT_ZOOM}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <ZoomControl position="topright" />
      <CenterOnMarker />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarkers />
    </MapContainer>
  );
};
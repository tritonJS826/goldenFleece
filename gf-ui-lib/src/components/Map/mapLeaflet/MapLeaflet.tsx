import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapLeaflet.module.scss";

export const MapLeaflet = () => {
  return (
    <MapContainer
      className={styles.map_container}
      center={[42.245, 42.685]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <TileLayer
        attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://{s}.api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?key=bDAt2jsIEABcBH1rvymlbhjoTKUoWEXs&language=en-US"
      /> */}
      {/* <TileLayer
        attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png"
      /> */}

      <Marker
        position={[42.2463, 42.6802]}
        icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
      >
        <Popup offset={[0, -30]}>
          Golden Fleece Hotel
        </Popup>
      </Marker>
    </MapContainer>
  );
};
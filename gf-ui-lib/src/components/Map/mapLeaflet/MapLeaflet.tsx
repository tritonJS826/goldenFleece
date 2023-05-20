import {FC, useContext, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from "react-leaflet";
import {IMarker} from "../mapContent/marker/IMarker";
import {MapContext} from "../MapContext";
import markerIconPng from "../../Map/resources/pin-hotel.svg";
import {Icon} from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapLeaflet.module.scss";
import {MarkerLeaflet} from "./markerLeaflet/MarkerLeaflet";

const MAP_CENTER_X = 42.247;
const MAP_CENTER_Y = 42.68;
const MAP_DEFAULT_ZOOM = 15;

export const MapLeaflet = () => {
  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer
      className={styles.map_container}
      center={[MAP_CENTER_X, MAP_CENTER_Y]}
      zoom={MAP_DEFAULT_ZOOM}
      scrollWheelZoom={true}
    >
      <LocationFinderDummy />
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
      <MarkerLeaflet />
    </MapContainer>
  );
};
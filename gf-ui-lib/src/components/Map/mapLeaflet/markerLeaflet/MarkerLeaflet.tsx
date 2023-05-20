import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {Icon} from "leaflet";
import {FC, useContext, useState} from "react";
import {MapContext} from "../../MapContext";
import {IMarker} from "../../mapContent/marker/IMarker";
import markerIconPng from "../../../Map/resources/markerIcons/pin-hotel.svg";


export const MarkerLeaflet = () => {
  const {menuItem, setMenuItem, markers} = useContext(MapContext);
  // const clickHandler = () => {
  //   setMenuItem(props);
  //   console.log("sgeg");
  // };
  // console.log(markers);

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
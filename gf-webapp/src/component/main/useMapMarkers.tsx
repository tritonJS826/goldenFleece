import {useState} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {Marker} from "gf-ui-lib/src/components/Map/mapLeaflet/mapMarkers/mapMarker/Marker";
import {mapLocations} from "./mapLocations";
import goldenFleeceImg from "src/resources/map/golden-fleece.jpg";
import cakeClubImg from "src/resources/map/cake-club.jpg";
import shedevriImg from "src/resources/map/shedevri.jpg";
import tomasWineCellarImg from "src/resources/map/tomas-wine-cellar.jpg";
import youthParkImg from "src/resources/map/youth-park.jpg";
import tennisCourtImg from "src/resources/map/tennis-court.jpg";
import stadiumImg from "src/resources/map/ramaz-shengelia-stadium.jpg";
import mapLocationIcon from "../../resources/map/markerIcons/location.svg";

export const useMapMarkers = () => {
  const {map} = useDictionary().dictionary;

  const [markers] = useState<Marker[]>([
    {
      id: mapLocations.goldenFleece.ID,
      name: mapLocations.goldenFleece.NAME,
      latitude: mapLocations.goldenFleece.LATITUDE,
      longitude: mapLocations.goldenFleece.LONGITUDE,
      markerType: mapLocations.goldenFleece.MARKER_TYPE,
      imgUrl: goldenFleeceImg,
      description: map.goldenFleeceDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: mapLocations.cakeClub.ID,
      name: mapLocations.cakeClub.NAME,
      latitude: mapLocations.cakeClub.LATITUDE,
      longitude: mapLocations.cakeClub.LONGITUDE,
      markerType: mapLocations.cakeClub.MARKER_TYPE,
      imgUrl: cakeClubImg,
      description: map.cakeClubDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: mapLocations.shedevri.ID,
      name: mapLocations.shedevri.NAME,
      latitude: mapLocations.shedevri.LATITUDE,
      longitude: mapLocations.shedevri.LONGITUDE,
      markerType: mapLocations.shedevri.MARKER_TYPE,
      imgUrl: shedevriImg,
      description: map.shedevriDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: mapLocations.tomasWineCellar.ID,
      name: mapLocations.tomasWineCellar.NAME,
      latitude: mapLocations.tomasWineCellar.LATITUDE,
      longitude: mapLocations.tomasWineCellar.LONGITUDE,
      markerType: mapLocations.tomasWineCellar.MARKER_TYPE,
      imgUrl: tomasWineCellarImg,
      description: map.tomasDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: mapLocations.youthPark.ID,
      name: mapLocations.youthPark.NAME,
      latitude: mapLocations.youthPark.LATITUDE,
      longitude: mapLocations.youthPark.LONGITUDE,
      markerType: mapLocations.youthPark.MARKER_TYPE,
      imgUrl: youthParkImg,
      description: map.youthParkDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: mapLocations.tennisCourt.ID,
      name: mapLocations.tennisCourt.NAME,
      latitude: mapLocations.tennisCourt.LATITUDE,
      longitude: mapLocations.tennisCourt.LONGITUDE,
      markerType: mapLocations.tennisCourt.MARKER_TYPE,
      imgUrl: tennisCourtImg,
      description: map.tennisCourtDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: mapLocations.ramazShengeliaStadium.ID,
      name: mapLocations.ramazShengeliaStadium.NAME,
      latitude: mapLocations.ramazShengeliaStadium.LATITUDE,
      longitude: mapLocations.ramazShengeliaStadium.LONGITUDE,
      markerType: mapLocations.ramazShengeliaStadium.MARKER_TYPE,
      imgUrl: stadiumImg,
      description: map.shengeliaStadiumDescription,
      markerIconUrl: mapLocationIcon,
    },
  ]);

  return {markers};
};
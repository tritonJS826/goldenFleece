import {useState} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {Marker} from "gf-ui-lib/src/components/Map/mapLeaflet/mapMarkers/mapMarker/Marker";
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
      id: 1,
      name: "Golden fleece",
      x: 42.24625,
      y: 42.68017,
      markerType: "main",
      imgUrl: goldenFleeceImg,
      description: map.goldenFleeceDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: 2,
      name: "Cake club",
      x: 42.24524,
      y: 42.68264,
      markerType: "food",
      imgUrl: cakeClubImg,
      description: map.cakeClubDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: 3,
      name: "Shedevri",
      x: 42.25059,
      y: 42.68343,
      markerType: "food",
      imgUrl: shedevriImg,
      description: map.shedevriDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: 4,
      name: "Toma's Wine Cellar",
      x: 42.25128,
      y: 42.68570,
      markerType: "food",
      imgUrl: tomasWineCellarImg,
      description: map.tomasDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: 5,
      name: "Youth park",
      x: 42.24978,
      y: 42.68143,
      markerType: "park",
      imgUrl: youthParkImg,
      description: map.youthParkDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: 6,
      name: "Tennis court",
      x: 42.25444,
      y: 42.68473,
      markerType: "park",
      imgUrl: tennisCourtImg,
      description: map.tennisCourtDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: 7,
      name: "Ramaz Shengelia Stadium",
      x: 42.25535,
      y: 42.68314,
      markerType: "park",
      imgUrl: stadiumImg,
      description: map.shengeliaStadiumDescription,
      markerIconUrl: mapLocationIcon,
    },
  ]);

  return {markers};
};


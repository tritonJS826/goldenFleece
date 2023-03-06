import {useCurrentDictionaryContext} from "../../context/Context";
import {IMarker} from "./mapInterfaces";
import goldenFleeceImg from "../../resources/map/golden-fleece.jpg";
import cakeClubImg from "../../resources/map/cake-club.jpg";
import shedevriImg from "../../resources/map/shedevri.jpg";
import tomasWineCellarImg from "../../resources/map/tomas-wine-cellar.jpg";
import youthParkImg from "../../resources/map/youth-park.jpg";
import tennisCourtImg from "../../resources/map/tennis-court.jpg";
import stadiumImg from "../../resources/map/ramaz-shengelia-stadium.jpg";


export const MapMarkers = () => {
  const {dictionary} = useCurrentDictionaryContext();

  const markers: IMarker[] = [
    {
      id: 1,
      name: "Golden fleece",
      x: 1329,
      y: 230,
      markerType: "main",
      imgUrl: goldenFleeceImg,
      description: dictionary.map.goldenFleeceDescription,
    },
    {
      id: 2,
      name: "Cake club",
      x: 1525,
      y: 110,
      markerType: "food",
      imgUrl: cakeClubImg,
      description: dictionary.map.cakeClubDescription,
    },
    {
      id: 3,
      name: "Shedevri",
      x: 1590,
      y: 630,
      markerType: "food",
      imgUrl: shedevriImg,
      description: dictionary.map.shedevriDescription,
    },
    {
      id: 4,
      name: "Toma's Wine Cellar",
      x: 1765,
      y: 740,
      markerType: "food",
      imgUrl: tomasWineCellarImg,
      description: dictionary.map.tomasDescription,
    },
    {
      id: 5,
      name: "Youth park",
      x: 1424,
      y: 500,
      markerType: "park",
      imgUrl: youthParkImg,
      description: dictionary.map.youthParkDescription,
    },
    {
      id: 6,
      name: "Tennis court",
      x: 1650,
      y: 980,
      markerType: "park",
      imgUrl: tennisCourtImg,
      description: dictionary.map.tennisCourtDescription,
    },
    {
      id: 7,
      name: "Ramaz Shengelia Stadium",
      x: 1522,
      y: 1100,
      markerType: "park",
      imgUrl: stadiumImg,
      description: dictionary.map.shengeliaStadiumDescription,
    },
  ];

  return markers;
};


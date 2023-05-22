import {mapLocations} from "./mapLocations.fixtures";
import goldenFleeceImg from "./resources/golden-fleece.jpg";
import cakeClubImg from "./resources/cake-club.jpg";
import mapLocationIcon from "./resources/markerIcons/location.svg";

/**
 * Map markers example
 */
export const markers = [
  {
    id: mapLocations.goldenFleece.ID,
    name: mapLocations.goldenFleece.NAME,
    latitude: mapLocations.goldenFleece.LATITUDE,
    longitude: mapLocations.goldenFleece.LONGITUDE,
    markerType: mapLocations.goldenFleece.MARKER_TYPE,
    imgUrl: goldenFleeceImg,
    description: mapLocations.goldenFleece.DESCRIPTION,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: mapLocations.cakeClub.ID,
    name: mapLocations.cakeClub.NAME,
    latitude: mapLocations.cakeClub.LATITUDE,
    longitude: mapLocations.cakeClub.LONGITUDE,
    markerType: mapLocations.cakeClub.MARKER_TYPE,
    imgUrl: cakeClubImg,
    description: mapLocations.cakeClub.DESCRIPTION,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: mapLocations.shedevri.ID,
    name: mapLocations.shedevri.NAME,
    latitude: mapLocations.shedevri.LATITUDE,
    longitude: mapLocations.shedevri.LONGITUDE,
    markerType: mapLocations.shedevri.MARKER_TYPE,
    imgUrl: cakeClubImg,
    description: mapLocations.shedevri.DESCRIPTION,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: mapLocations.tomasWineCellar.ID,
    name: mapLocations.tomasWineCellar.NAME,
    latitude: mapLocations.tomasWineCellar.LATITUDE,
    longitude: mapLocations.tomasWineCellar.LONGITUDE,
    markerType: mapLocations.tomasWineCellar.MARKER_TYPE,
    imgUrl: cakeClubImg,
    description: mapLocations.tomasWineCellar.DESCRIPTION,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: mapLocations.youthPark.ID,
    name: mapLocations.youthPark.NAME,
    latitude: mapLocations.youthPark.LATITUDE,
    longitude: mapLocations.youthPark.LONGITUDE,
    markerType: mapLocations.youthPark.MARKER_TYPE,
    imgUrl: cakeClubImg,
    description: mapLocations.youthPark.DESCRIPTION,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: mapLocations.tennisCourt.ID,
    name: mapLocations.tennisCourt.NAME,
    latitude: mapLocations.tennisCourt.LATITUDE,
    longitude: mapLocations.tennisCourt.LONGITUDE,
    markerType: mapLocations.tennisCourt.MARKER_TYPE,
    imgUrl: cakeClubImg,
    description: mapLocations.tennisCourt.DESCRIPTION,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: mapLocations.ramazShengeliaStadium.ID,
    name: mapLocations.ramazShengeliaStadium.NAME,
    latitude: mapLocations.ramazShengeliaStadium.LATITUDE,
    longitude: mapLocations.ramazShengeliaStadium.LONGITUDE,
    markerType: mapLocations.ramazShengeliaStadium.MARKER_TYPE,
    imgUrl: cakeClubImg,
    description: mapLocations.ramazShengeliaStadium.DESCRIPTION,
    markerIconUrl: mapLocationIcon,
  },
];
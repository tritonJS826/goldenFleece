import {MAP_LOCATIONS} from "./mapLocations.fixtures";
import goldenFleeceImg from "./resources/golden-fleece.jpg";
import cakeClubImg from "./resources/cake-club.jpg";
import mapLocationIcon from "./resources/markerIcons/location.svg";

const MARKER_TYPE_MAIN = "main";
const MARKER_TYPE_FOOD = "food";

/**
 * Map markers example
 */
export const markers = [
  {
    id: MAP_LOCATIONS.ID.GOLDEN_FLEECE,
    name: MAP_LOCATIONS.NAME.GOLDEN_FLEECE,
    latitude: MAP_LOCATIONS.LATITUDE.GOLDEN_FLEECE,
    longitude: MAP_LOCATIONS.LONGITUDE.GOLDEN_FLEECE,
    markerType: MARKER_TYPE_MAIN,
    imgUrl: goldenFleeceImg,
    description: MAP_LOCATIONS.DESCRIPTION.GOLDEN_FLEECE,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: MAP_LOCATIONS.ID.CAKE_CLUB,
    name: MAP_LOCATIONS.NAME.CAKE_CLUB,
    latitude: MAP_LOCATIONS.LATITUDE.CAKE_CLUB,
    longitude: MAP_LOCATIONS.LONGITUDE.CAKE_CLUB,
    markerType: MARKER_TYPE_FOOD,
    imgUrl: cakeClubImg,
    description: MAP_LOCATIONS.DESCRIPTION.CAKE_CLUB,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: MAP_LOCATIONS.ID.SHEDEVRI,
    name: MAP_LOCATIONS.NAME.SHEDEVRI,
    latitude: MAP_LOCATIONS.LATITUDE.SHEDEVRI,
    longitude: MAP_LOCATIONS.LONGITUDE.SHEDEVRI,
    markerType: MARKER_TYPE_FOOD,
    imgUrl: cakeClubImg,
    description: MAP_LOCATIONS.DESCRIPTION.SHEDEVRI,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: MAP_LOCATIONS.ID.TOMAS_WINE_CELLAR,
    name: MAP_LOCATIONS.NAME.TOMAS_WINE_CELLAR,
    latitude: MAP_LOCATIONS.LATITUDE.TOMAS_WINE_CELLAR,
    longitude: MAP_LOCATIONS.LONGITUDE.TOMAS_WINE_CELLAR,
    markerType: MARKER_TYPE_FOOD,
    imgUrl: cakeClubImg,
    description: MAP_LOCATIONS.DESCRIPTION.TOMAS_WINE_CELLAR,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: MAP_LOCATIONS.ID.YOUTH_PARK,
    name: MAP_LOCATIONS.NAME.YOUTH_PARK,
    latitude: MAP_LOCATIONS.LATITUDE.YOUTH_PARK,
    longitude: MAP_LOCATIONS.LONGITUDE.YOUTH_PARK,
    markerType: MARKER_TYPE_FOOD,
    imgUrl: cakeClubImg,
    description: MAP_LOCATIONS.DESCRIPTION.YOUTH_PARK,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: MAP_LOCATIONS.ID.TENNIS_COURT,
    name: MAP_LOCATIONS.NAME.TENNIS_COURT,
    latitude: MAP_LOCATIONS.LATITUDE.TENNIS_COURT,
    longitude: MAP_LOCATIONS.LONGITUDE.TENNIS_COURT,
    markerType: MARKER_TYPE_FOOD,
    imgUrl: cakeClubImg,
    description: MAP_LOCATIONS.DESCRIPTION.TENNIS_COURT,
    markerIconUrl: mapLocationIcon,
  },
  {
    id: MAP_LOCATIONS.ID.RAMAZ_SHENGELIA_STADIUM,
    name: MAP_LOCATIONS.NAME.RAMAZ_SHENGELIA_STADIUM,
    latitude: MAP_LOCATIONS.LATITUDE.RAMAZ_SHENGELIA_STADIUM,
    longitude: MAP_LOCATIONS.LONGITUDE.RAMAZ_SHENGELIA_STADIUM,
    markerType: MARKER_TYPE_FOOD,
    imgUrl: cakeClubImg,
    description: MAP_LOCATIONS.DESCRIPTION.RAMAZ_SHENGELIA_STADIUM,
    markerIconUrl: mapLocationIcon,
  },
];
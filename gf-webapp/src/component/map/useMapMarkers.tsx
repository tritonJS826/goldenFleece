import {useEffect, useState} from "react";
import {Marker} from "gf-ui-lib/src/components/Map/mapLeaflet/mapMarkers/mapMarker/Marker";
import {MAP_LOCATIONS} from "src/component/map/mapLocations";
import mapLocationIcon from "src/resources/map/markerIcons/location.svg";
import {languageService} from "src/service/Language/LanguageService";
import map from "src/locales/map/map.json";
import goldenFleeceImg from "src/resources/map/golden-fleece.jpg";
import cakeClubImg from "src/resources/map/cake-club.jpg";
import shedevriImg from "src/resources/map/shedevri.jpg";
import tomasWineCellarImg from "src/resources/map/tomas-wine-cellar.jpg";
import youthParkImg from "src/resources/map/youth-park.jpg";
import tennisCourtImg from "src/resources/map/tennis-court.jpg";
import stadiumImg from "src/resources/map/ramaz-shengelia-stadium.jpg";

const MARKER_TYPE_MAIN = {
  en: "main",
  ru: "main",
  ge: "main",
};
const MARKER_TYPE_FOOD = {
  en: "CAFE",
  ru: "КАФЕ",
  ge: "კაფე",
};
const MARKER_TYPE_PARK = {
  en: "PARK",
  ru: "ПАРК",
  ge: "პარკი",
};
const MARKER_TYPE_SPORT = {
  en: "SPORT",
  ru: "СПОРТ",
  ge: "სპორტი",
};

export const useMapMarkers = () => {
  const markerDescription = map[languageService.getCurrentLanguage()];

  const defaultMarkers = [
    {
      id: MAP_LOCATIONS.ID.GOLDEN_FLEECE,
      name: MAP_LOCATIONS.NAME.GOLDEN_FLEECE,
      latitude: MAP_LOCATIONS.LATITUDE.GOLDEN_FLEECE,
      longitude: MAP_LOCATIONS.LONGITUDE.GOLDEN_FLEECE,
      markerType: MARKER_TYPE_MAIN[languageService.getCurrentLanguage()],
      imgUrl: goldenFleeceImg,
      description: markerDescription.goldenFleeceDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: MAP_LOCATIONS.ID.CAKE_CLUB,
      name: MAP_LOCATIONS.NAME.CAKE_CLUB,
      latitude: MAP_LOCATIONS.LATITUDE.CAKE_CLUB,
      longitude: MAP_LOCATIONS.LONGITUDE.CAKE_CLUB,
      markerType: MARKER_TYPE_FOOD[languageService.getCurrentLanguage()],
      imgUrl: cakeClubImg,
      description: markerDescription.cakeClubDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: MAP_LOCATIONS.ID.SHEDEVRI,
      name: MAP_LOCATIONS.NAME.SHEDEVRI,
      latitude: MAP_LOCATIONS.LATITUDE.SHEDEVRI,
      longitude: MAP_LOCATIONS.LONGITUDE.SHEDEVRI,
      markerType: MARKER_TYPE_FOOD[languageService.getCurrentLanguage()],
      imgUrl: shedevriImg,
      description: markerDescription.shedevriDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: MAP_LOCATIONS.ID.TOMAS_WINE_CELLAR,
      name: MAP_LOCATIONS.NAME.TOMAS_WINE_CELLAR,
      latitude: MAP_LOCATIONS.LATITUDE.TOMAS_WINE_CELLAR,
      longitude: MAP_LOCATIONS.LONGITUDE.TOMAS_WINE_CELLAR,
      markerType: MARKER_TYPE_FOOD[languageService.getCurrentLanguage()],
      imgUrl: tomasWineCellarImg,
      description: markerDescription.tomasDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: MAP_LOCATIONS.ID.YOUTH_PARK,
      name: MAP_LOCATIONS.NAME.YOUTH_PARK,
      latitude: MAP_LOCATIONS.LATITUDE.YOUTH_PARK,
      longitude: MAP_LOCATIONS.LONGITUDE.YOUTH_PARK,
      markerType: MARKER_TYPE_PARK[languageService.getCurrentLanguage()],
      imgUrl: youthParkImg,
      description: markerDescription.youthParkDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: MAP_LOCATIONS.ID.TENNIS_COURT,
      name: MAP_LOCATIONS.NAME.TENNIS_COURT,
      latitude: MAP_LOCATIONS.LATITUDE.TENNIS_COURT,
      longitude: MAP_LOCATIONS.LONGITUDE.TENNIS_COURT,
      markerType: MARKER_TYPE_SPORT[languageService.getCurrentLanguage()],
      imgUrl: tennisCourtImg,
      description: markerDescription.tennisCourtDescription,
      markerIconUrl: mapLocationIcon,
    },
    {
      id: MAP_LOCATIONS.ID.RAMAZ_SHENGELIA_STADIUM,
      name: MAP_LOCATIONS.NAME.RAMAZ_SHENGELIA_STADIUM,
      latitude: MAP_LOCATIONS.LATITUDE.RAMAZ_SHENGELIA_STADIUM,
      longitude: MAP_LOCATIONS.LONGITUDE.RAMAZ_SHENGELIA_STADIUM,
      markerType: MARKER_TYPE_SPORT[languageService.getCurrentLanguage()],
      imgUrl: stadiumImg,
      description: markerDescription.shengeliaStadiumDescription,
      markerIconUrl: mapLocationIcon,
    },
  ];

  const [markers, setMarkers] = useState<Marker[]>(defaultMarkers);

  useEffect(() => {
    setMarkers(defaultMarkers);
  }, [languageService.getCurrentLanguage()]);

  return {markers};
};
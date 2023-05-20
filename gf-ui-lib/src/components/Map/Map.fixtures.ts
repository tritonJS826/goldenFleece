import goldenFleeceImg from "./resources/golden-fleece.jpg";
import cakeClubImg from "./resources/cake-club.jpg";
import hotelIcon from "./resources/markerIcons/pin-hotel.svg";
import foodIcon from "./resources/markerIcons/restaurant-pin.svg";
import parkIcon from "./resources/markerIcons/park-location.svg";
import tennisCourtIcon from "./resources/markerIcons/tennis-court.svg";
import footballStadiumIcon from "./resources/markerIcons/soccer-stadium.svg";

/**
 * Map markers example
 */
export const markers = [
  {
    id: 1,
    name: "Golden fleece",
    x: 42.24625,
    y: 42.68017,
    markerType: "main",
    imgUrl: goldenFleeceImg,
    description: "Map goldenFleeceDescription from dictionary example",
    markerIconUrl: hotelIcon,
  },
  {
    id: 2,
    name: "Cake club",
    x: 42.24524,
    y: 42.68264,
    markerType: "food",
    imgUrl: cakeClubImg,
    description: `Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    markerIconUrl: foodIcon,
  },
  {
    id: 3,
    name: "Cake club",
    x: 42.25059,
    y: 42.68343,
    markerType: "food",
    imgUrl: cakeClubImg,
    description: `Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    markerIconUrl: foodIcon,
  },
  {
    id: 4,
    name: "Cake club",
    x: 42.25128,
    y: 42.68570,
    markerType: "food",
    imgUrl: cakeClubImg,
    description: `Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    markerIconUrl: foodIcon,
  },
  {
    id: 5,
    name: "Cake club",
    x: 42.24978,
    y: 42.68143,
    markerType: "food",
    imgUrl: cakeClubImg,
    description: `Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    markerIconUrl: parkIcon,
  },
  {
    id: 6,
    name: "Cake club",
    x: 42.25444,
    y: 42.68473,
    markerType: "food",
    imgUrl: cakeClubImg,
    description: `Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    markerIconUrl: tennisCourtIcon,
  },
  {
    id: 7,
    name: "Cake club",
    x: 42.25535,
    y: 42.68314,
    markerType: "sport",
    imgUrl: cakeClubImg,
    description: `Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    markerIconUrl: footballStadiumIcon,
  },
];
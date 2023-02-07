import {IMarker} from "./mapInterfaces";
import goldenFleeceImg from "../../resources/map/golden-fleece.jpg";
import cakeClubImg from "../../resources/map/cake-club.jpg";
import shedevriImg from "../../resources/map/shedevri.jpg";
import tomasWineCellarImg from "../../resources/map/tomas-wine-cellar.jpg";
import youthParkImg from "../../resources/map/youth-park.jpg";
import tennisCourtImg from "../../resources/map/tennis-court.jpg";
import stadiumImg from "../../resources/map/ramaz-shengelia-stadium.jpg";

export const markers: IMarker[] = [
  {
    id: 1,
    name: "Golden fleece",
    x: 1329,
    y: 230,
    markerType: "main",
    markerGroup: "Main hotel",
    imgUrl: goldenFleeceImg,
    description: "Located in Kutaisi, 4.9 km from WhiteBridge,\
    Hotel Golden Fleece provides accommodation with a seasonal outdoor\
    swimming pool, free private parking, a terrace and a bar",
  },
  {
    id: 2,
    name: "Cake club",
    x: 1525,
    y: 110,
    markerType: "food",
    markerGroup: "Food and drink",
    imgUrl: cakeClubImg,
    description: "Soft, melt-in-your-mouth biscuit, butter cream,\
    an abundance of various fillings in cakes, pastries and pastries,\
    a variety of confectionery: confectionery Cake club is the best taste\
    of traditional pastries made only from natural ingredients.",
  },
  {
    id: 3,
    name: "Shedevri",
    x: 1590,
    y: 630,
    markerType: "food",
    markerGroup: "Food and drink",
    imgUrl: shedevriImg,
    description: "Shedevri offers you Georgian, traditional dishes, high quality, and guarantees the best taste!",
  },
  {
    id: 4,
    name: "Toma's Wine Cellar",
    x: 1765,
    y: 740,
    markerType: "food",
    markerGroup: "Food and drink",
    imgUrl: tomasWineCellarImg,
    description: "This is family winery, where already 50 year we are doing wine by our family technologies",
  },
  {
    id: 5,
    name: "Youth park",
    x: 1424,
    y: 500,
    markerType: "park",
    markerGroup: "Park zones",
    imgUrl: youthParkImg,
    description: "Youth park is 3.5 km south from Colchis \
    fountain along Chavchavadze avenue. Circumference is 1.4 km.\
    Large by Kutaisi standards and excellent for running and to some extent cycling",
  },
  {
    id: 6,
    name: "Tennis court",
    x: 1650,
    y: 980,
    markerType: "park",
    markerGroup: "Park zones",
    imgUrl: tennisCourtImg,
    description: "A modern sports complex for adults and children (4+), where all\
    the necessary conditions for a full-fledged training process of a tennis player are created",
  },
  {
    id: 7,
    name: "Ramaz Shengelia Stadium",
    x: 1522,
    y: 1100,
    markerType: "park",
    markerGroup: "Park zones",
    imgUrl: stadiumImg,
    description: "It is a multi-use stadium in Kutaisi, Georgia used mostly for football\
    matches. It is the home stadium of FC Torpedo Kutaisi. The stadium is able to hold 12,000 people.",
  },
];
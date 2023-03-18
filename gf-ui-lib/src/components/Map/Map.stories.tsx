import {ComponentStory, ComponentMeta} from "@storybook/react";
import goldenFleeceImg from "./resources/golden-fleece.jpg";
import cakeClubImg from "./resources/cake-club.jpg";

import {Map as MapComponent} from "./Map";

export default {
  title: "Component/Map",
  component: MapComponent,
} as ComponentMeta<typeof MapComponent>;

const Template: ComponentStory<typeof MapComponent> = (args) => (
  <MapComponent {...args} />
);

export const Map = Template.bind({});
Map.args = {
  markers: [
    {
      id: 1,
      name: "Golden fleece",
      x: 1329,
      y: 230,
      markerType: "main",
      imgUrl: goldenFleeceImg,
      description: "Map goldenFleeceDescription from dictionary example",
    },
    {
      id: 2,
      name: "Cake club",
      x: 1525,
      y: 110,
      markerType: "food",
      imgUrl: cakeClubImg,
      description: `Map cakeClubImg from dictionary example long. 
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    },
    {
      id: 3,
      name: "Cake club",
      x: 1525,
      y: 110,
      markerType: "food",
      imgUrl: cakeClubImg,
      description: `Map cakeClubImg from dictionary example long. 
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    },
    {
      id: 4,
      name: "Cake club",
      x: 1525,
      y: 110,
      markerType: "food",
      imgUrl: cakeClubImg,
      description: `Map cakeClubImg from dictionary example long. 
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    },
    {
      id: 6,
      name: "Cake club",
      x: 1525,
      y: 110,
      markerType: "food",
      imgUrl: cakeClubImg,
      description: `Map cakeClubImg from dictionary example long. 
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    },
    {
      id: 7,
      name: "Cake club",
      x: 1525,
      y: 110,
      markerType: "food",
      imgUrl: cakeClubImg,
      description: `Map cakeClubImg from dictionary example long. 
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    },
    {
      id: 9,
      name: "Cake club",
      x: 1525,
      y: 110,
      markerType: "sport",
      imgUrl: cakeClubImg,
      description: `Map cakeClubImg from dictionary example long. 
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        Map cakeClubImg from dictionary example long.
        `,
    },
  ],
};
import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Navigation} from "../logic/rooms/roomsPage/navigation/navigation";

export default {
  title: "Page/RoomsPage/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

export const Template: ComponentStory<typeof Navigation> = (args) => <Navigation />;


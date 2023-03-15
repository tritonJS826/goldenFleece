import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {RoomsBlock} from "src/logic/rooms/roomPage/roomsBlock/RoomsBlock";

export default {
  title: "Page/RoomPage/RoomsBlock",
  component: RoomsBlock,
} as ComponentMeta<typeof RoomsBlock>;

export const Template: ComponentStory<typeof RoomsBlock> = (args) => <RoomsBlock />;


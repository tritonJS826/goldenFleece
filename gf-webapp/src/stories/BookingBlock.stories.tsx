import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {BookingBlock} from "../component/bookBlock/BookingBlock";

export default {
  title: "Block/BookingBlock",
  component: BookingBlock,
} as ComponentMeta<typeof BookingBlock>;

export const Template: ComponentStory<typeof BookingBlock> = (args) => <BookingBlock />;


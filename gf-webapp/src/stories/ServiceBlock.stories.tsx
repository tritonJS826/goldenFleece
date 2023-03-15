import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ServiceBlock} from "src/logic/aboutUsPage/serviceBlock/ServiceBlock";

export default {
  title: "Page/AboutUs/ServiceBlock",
  component: ServiceBlock,
} as ComponentMeta<typeof ServiceBlock>;

export const Template: ComponentStory<typeof ServiceBlock> = (args) => <ServiceBlock />;


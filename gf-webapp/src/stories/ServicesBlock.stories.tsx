import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ServicesBlock} from "src/component/servicesBlock/ServicesBlock";

export default {
  title: "Block/ServicesBlock",
  component: ServicesBlock,
} as ComponentMeta<typeof ServicesBlock>;

export const Template: ComponentStory<typeof ServicesBlock> = (args) => <ServicesBlock />;


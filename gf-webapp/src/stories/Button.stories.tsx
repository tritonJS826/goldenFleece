import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {AboutUs} from "../component/aboutUs/AboutUs";

export default {
  title: "Block/AboutUs",
  component: AboutUs,
} as ComponentMeta<typeof AboutUs>;

export const Template: ComponentStory<typeof AboutUs> = (args) => <AboutUs />;


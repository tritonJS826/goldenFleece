import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Slider} from "../component/sliderImage/Slider";

export default {
  title: "Component/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Template: ComponentStory<typeof Slider> = (args) => <Slider />;


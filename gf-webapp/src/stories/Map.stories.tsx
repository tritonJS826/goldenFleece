import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Map} from "../component/map/Map";

export default {
  title: "Component/Map",
  component: Map,
} as ComponentMeta<typeof Map>;

export const Template: ComponentStory<typeof Map> = (args) => <Map />;


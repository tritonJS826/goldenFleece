import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Button} from "../component/main/button/Button";

export default {
  title: "Component/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => <Button />;


import {ComponentStory, ComponentMeta} from "@storybook/react";

import {TextField as TextComponent} from "./TextField";

export default {
  title: "Component/Input",
  component: TextComponent,
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args} />
);

export const TextField = Template.bind({});

TextField.args = {
  /**
   * Title of field
   */
  titleText: "Text Field",
  /**
   * Input value
   */
  value: "Text field",
  /**
   * Callback triggered on change value
   */
  onChangeValue: () => console.log("changed"),
};
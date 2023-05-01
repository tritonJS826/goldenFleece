import {ComponentStory, ComponentMeta} from "@storybook/react";

import {NumberField as NumberComponent} from "./NumberField";

export default {
  title: "Component/Input",
  component: NumberComponent,
} as ComponentMeta<typeof NumberComponent>;

const Template: ComponentStory<typeof NumberComponent> = (args) => (
  <NumberComponent {...args} />
);

export const NumberField = Template.bind({});

NumberField.args = {
  /**
   * Title of field
   */
  titleText: "Number Field",
  /**
   * Input value
   */
  value: 123,
  /**
   * Callback triggered on change value
   */
  onChangeValue: () => console.log("changed"),
};
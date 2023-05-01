import {ComponentStory, ComponentMeta} from "@storybook/react";

import {SelectField as SelectComponent} from "./SelectField";

export default {
  title: "Component/Select",
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

const Template: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent {...args} />
);

export const SelectField = Template.bind({});
SelectField.args = {
  /**
   * Title of field
   */
  titleText: "Services",
  /**
   * Array of items
   */
  itemsList: ["Single", "Double", "Twin"],
  /**
   * Selected item
   */
  selectedItem: "Single",
  /**
   * Callback triggered on change value
   */
  onChangeValue: () => console.log("changed"),
};
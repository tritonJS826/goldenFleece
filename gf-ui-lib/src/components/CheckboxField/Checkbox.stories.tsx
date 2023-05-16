import {ComponentStory, ComponentMeta} from "@storybook/react";
import {CheckboxField as CheckboxComponent} from "gf-ui-lib/src/components/CheckboxField/CheckboxField";

export default {
  title: "Component/Checkbox",
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
);

export const CheckboxField = Template.bind({});
CheckboxField.args = {
  /**
   * Title of field
   */
  titleText: "Services",
  /**
   * Array of items
   */
  itemsList: ["Wifi", "Laundry", "Heating"],
  /**
   * Selected items
   */
  selectedItems: ["Wifi", "Heating"],
  /**
   * Callback triggered on change value
   */
  onChangeValue: () => console.log("changed"),
};
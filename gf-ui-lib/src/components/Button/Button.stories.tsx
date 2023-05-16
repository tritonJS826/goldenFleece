import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Button as ButtonComponent} from "gf-ui-lib/src/components/Button/Button";

export default {
  title: "Component/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
  /**
   * Button value (text)
   */
  value: "Button",

  /**
   * Callback triggered on click
   */
  onClick: () => alert("click!"),
};
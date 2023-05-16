import {ComponentStory, ComponentMeta} from "@storybook/react";
import {SmallTitle as SmallTitleComponent} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";

export default {
  title: "Component/SmallTitle",
  component: SmallTitleComponent,
} as ComponentMeta<typeof SmallTitleComponent>;

const Template: ComponentStory<typeof SmallTitleComponent> = (args) => (
  <SmallTitleComponent {...args} />
);

export const SmallTitle = Template.bind({});
SmallTitle.args = {
  /**
   * Title text
   */
  text: "Title text",
};
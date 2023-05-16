import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Title as TitleComponent} from "src/components/Title/Title";
import {TitleLevel} from "src/components/Title/TitleLevel";

export default {
  title: "Component/Title",
  component: TitleComponent,
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<typeof TitleComponent> = (args) => (
  <TitleComponent {...args} />
);

export const Title = Template.bind({});
Title.args = {
  /**
   * Title text
   */
  text: "Title text",
  /**
   * Title level
   */
  level: TitleLevel.h4,
};
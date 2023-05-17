import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Loader as LoaderComponent} from "gf-ui-lib/src/components/Loader/Loader";

export default {
  title: "Component/Loader",
  component: LoaderComponent,
} as ComponentMeta<typeof LoaderComponent>;

const Template: ComponentStory<typeof LoaderComponent> = (args) => (
  <LoaderComponent {...args} />
);

export const Loader = Template.bind({});
Loader.args = {isLoading: true};
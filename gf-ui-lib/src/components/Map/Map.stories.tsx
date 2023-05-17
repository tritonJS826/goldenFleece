import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Map as MapComponent} from "gf-ui-lib/src/components/Map/Map";
import {markers} from "gf-ui-lib/src/components/Map/Map.fixtures";

export default {
  title: "Component/Map",
  component: MapComponent,
} as ComponentMeta<typeof MapComponent>;

const Template: ComponentStory<typeof MapComponent> = (args) => (
  <MapComponent {...args} />
);

export const Map = Template.bind({});
Map.args = {markers};
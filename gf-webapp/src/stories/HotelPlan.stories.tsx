import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {HotelPlan} from "../logic/bookingPage/hotelPlan/HotelPlan";

export default {
  title: "Page/BookingPage/HotelPlan",
  component: HotelPlan,
} as ComponentMeta<typeof HotelPlan>;

export const Template: ComponentStory<typeof HotelPlan> = (args) => <HotelPlan />;


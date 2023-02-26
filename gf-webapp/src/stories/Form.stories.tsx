import React, {SetStateAction} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Form} from "../logic/bookingPage/form/Form";

export default {
  title: "Page/BookingPage/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const Template: ComponentStory<typeof Form> = (args) => (<Form roomNumber={"3"} />);


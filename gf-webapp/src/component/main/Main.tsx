import React from "react";
import {AboutUs} from "../aboutUs/AboutUs";
import {Map} from "../map/Map";
import {Rooms} from "../rooms/Rooms";
import {Slider} from "../sliderImage/Slider";

export function Main() {
  return (
    <>
      <Slider />
      <Rooms />
      <AboutUs />
      <Map />
    </>
  );
}
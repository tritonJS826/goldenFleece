import React from "react";
import {AboutUs} from "../aboutUs/AboutUs";
import {Map} from "../map/Map";
import {Slider} from "../sliderImage/Slider";

export function Main() {
  return (
    <>
      <Slider />
      <AboutUs />
      <Map />
    </>
  );
}
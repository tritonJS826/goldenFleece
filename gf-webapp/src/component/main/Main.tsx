import React from "react";
import {Slider} from "../sliderImage/Slider";
import {Button} from "./button/Button";
import {AboutUs} from "../aboutUs/AboutUs";
import {Map} from "../map/Map";


export function Main() {
  return (
    <>
      <Slider />
      <Button />
      <AboutUs />
      <Map />
    </>
  );
}
import React from "react";
import {Slider} from "src/component/sliderImage/Slider";
import {Button} from "src/component/main/button/Button";
import {AboutUs} from "src/component/aboutUs/AboutUs";
import {Map} from "src/component/map/Map";


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
import React from "react";
import {AboutUs} from "../aboutUs/AboutUs";
import {Map} from "../map/Map";
import {Slider} from "../sliderImage/Slider";
import {Button} from "./button/Button";
import styles from "./Main.module.scss";

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
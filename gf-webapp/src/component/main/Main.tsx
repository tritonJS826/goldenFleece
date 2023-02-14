import React from "react";
import {AboutUs} from "../aboutUs/AboutUs";
import {Map} from "../map/Map";
// import {Rooms} from "../rooms/Rooms";
import {Slider} from "../sliderImage/Slider";
import {Button} from "./button/Button";
import styles from "./Main.module.scss";

export function Main() {
  return (
    <>
      <Slider />
      {/* <Rooms /> */}
      <Button />
      <AboutUs />
      <Map />
    </>
  );
}
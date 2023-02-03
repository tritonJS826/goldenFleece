import React from "react";
import {Slider} from "../../component/Slider/Slider";
import {SliderVideo} from "../../component/SliderVideo/SliderVideo";

export const MainPage = () => {
  return (
    <div className="App">
      <h1>
        Main
      </h1>
      <Slider />
      <SliderVideo />
    </div>
  );
};

import React from "react";
import {Slider} from "src/component/sliderImage/Slider";
import {Button} from "gf-ui-lib/components/Button/Button";
import {AboutUs} from "src/component/aboutUs/AboutUs";
import {Map} from "src/component/map/Map";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useNavigate} from "react-router-dom";
import {pages} from "src/pages";


export function Main() {
  const {dictionary} = useDictionary();
  const navigate = useNavigate();

  return (
    <>
      <Slider />
      <Button
        value={dictionary.bookButtonText}
        onClick={() => navigate(pages.booking.path)}
      />
      <AboutUs />
      <Map />
    </>
  );
}
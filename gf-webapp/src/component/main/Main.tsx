import {Slider} from "src/component/sliderImage/Slider";
import {Button} from "gf-ui-lib/src/components/Button/Button";
import {AboutUs} from "src/component/aboutUs/AboutUs";
import {Map} from "gf-ui-lib/src/components/Map/Map";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useNavigate} from "react-router-dom";
import {pages} from "src/pages";
import {useMapMarkers} from "src/component/main/useMapMarkers";


export function Main() {
  const {dictionary} = useDictionary();
  const navigate = useNavigate();
  const {markers} = useMapMarkers();

  return (
    <>
      <Slider />
      <Button
        value={dictionary.bookButtonText}
        onClick={() => navigate(pages.booking.path)}
      />
      <AboutUs />
      <Map markers={markers} />
    </>
  );
}
import {useState} from "react";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";
interface AdultsProps {
  adults: number;
  titleText: string;
  onChangeValue: (value: number) => void;
}

export const Adults = (props: AdultsProps) => {

  const [adults, setAdults] = useState(props.adults);

  // TODO: changeHandler repeated in many components. It will become universal when the common input component is implemented.

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    props.onChangeValue(value);
    setAdults(value);
  };

  return (
    <label>
      <SmallTitle
        text={props.titleText}
      />
      <input type="number"
        value={adults}
        onChange={changeHandler}
      />
    </label>
  );
};
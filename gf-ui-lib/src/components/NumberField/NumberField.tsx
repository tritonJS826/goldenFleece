import {useState} from "react";
import {SmallTitle} from "../SmallTitle/SmallTitle";

/**
 * Input props
 */
interface NumberFieldProps {
  /**
   * Input value
   */
  value: number;
  /**
   * Title of input field
   */
  titleText: string;
  /**
   * Callback triggered on change input field
   */
  onChangeValue: (value: number) => void;
}

export const NumberField = (props: NumberFieldProps) => {

  const [value, setValue] = useState(props.value);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = Number(e.target.value);
    props.onChangeValue(fieldValue);
    setValue(fieldValue);
  };

  return (
    <label>
      <SmallTitle
        text={props.titleText}
      />
      <input
        type="number"
        value={value}
        onChange={changeHandler}
      />
    </label>
  );
};
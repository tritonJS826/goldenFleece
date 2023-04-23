import {useState} from "react";
import {SmallTitle} from "../SmallTitle/SmallTitle";

/**
 * Input props
 */
interface TextFieldProps {
  /**
   * field type
   */
  type?: "text" | "textarea";
  /**
   * Input value
   */
  value: string;
  /**
   * Title of input field
   */
  titleText: string;
  /**
   * Callback triggered on change input field
   */
  onChangeValue: (value: string) => void;
}

const DEFAULT_VALUE = "text";

export const TextField = (props: TextFieldProps) => {

  const [value, setValue] = useState(props.value);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const fieldValue = e.target.value;
    props.onChangeValue(fieldValue);
    setValue(fieldValue);
  };

  const renderTextField = () =>
    (props.type ?? DEFAULT_VALUE) === "text" ?
      <input
        value={value}
        onChange={changeHandler}
      />
      :
      <textarea
        value={value}
        onChange={changeHandler}
      />;

  return (
    <label>
      <SmallTitle
        text={props.titleText}
      />
      {renderTextField()}
    </label>
  );
};
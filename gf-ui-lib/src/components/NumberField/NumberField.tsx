import {useState} from "react";
import {Title} from "../Title/Title";
import {TitleLevel} from "../Title/TitleLevel";
import styles from "./NumberField.module.scss";

/**
 * Props for input with type number
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
    <label className={styles.label}>
      <Title
        level={TitleLevel.h4}
        text={props.titleText}
      />
      <input
        className={styles.input}
        type="number"
        value={value}
        onChange={changeHandler}
      />
    </label>
  );
};
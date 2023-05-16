import {useState} from "react";
import {SmallTitle} from "gf-ui-lib/src/components/SmallTitle/SmallTitle";
import styles from "gf-ui-lib/src/components/NumberField/NumberField.module.scss";

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
      <SmallTitle
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
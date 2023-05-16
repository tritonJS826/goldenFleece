import {useState} from "react";
import {Title} from "src/components/Title/Title";
import {TitleLevel} from "src/components/Title/TitleLevel";
import styles from "src/components/TextField/TextField.module.scss";

/**
 * Props for field with text in it
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
   * Input's placeholder
   */
  placeholder?: string;
  /**
   * Callback triggered on change input field
   */
  onChangeValue: (value: string) => void;
}

const DEFAULT_VALUE = "text";
const DEFAULT_PLACEHOLDER_VALUE = "";

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
        className={styles.input}
        value={value}
        placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER_VALUE}
        onChange={changeHandler}
      />
      :
      <textarea
        className={styles.textarea}
        value={value}
        placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER_VALUE}
        onChange={changeHandler}
      />;

  return (
    <label className={styles.label}>
      <Title
        level={TitleLevel.h4}
        text={props.titleText}
      />
      {renderTextField()}
    </label>
  );
};
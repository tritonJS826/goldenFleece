import {useState} from "react";
import {SmallTitle} from "../SmallTitle/SmallTitle";
import styles from "./SelectField.module.scss";

interface SelectFieldProps {
  /**
   * itemsList array of select options
   */
  itemsList: string[];
  /**
   * Selected option
   */
  selectedItem: string;
  /**
   * Title of select field
   */
  titleText: string;
  /**
   * Callback triggered on change select field
   */
  onChangeValue: (value: string) => void;
}

export const SelectField = (props: SelectFieldProps) => {

  const [value, setValue] = useState(props.selectedItem);

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldValue = e.target.value;
    props.onChangeValue(fieldValue);
    setValue(fieldValue);
  };

  const renderItems = () =>
    props.itemsList.map(item => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ));


  return (
    <div>
      <SmallTitle
        text="Room type"
      />
      <select
        className={styles.list}
        value={value}
        onChange={changeHandler}
      >
        {renderItems()}
      </select>
    </div>
  );
};
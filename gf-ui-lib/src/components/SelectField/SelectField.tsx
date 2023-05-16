import {useState} from "react";
import {Title} from "gf-ui-lib/src/components/Title/Title";
import {TitleLevel} from "gf-ui-lib/src/components/Title/TitleLevel";
import styles from "gf-ui-lib/src/components/SelectField/SelectField.module.scss";

/**
 * Select field props
 */
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
      <Title
        level={TitleLevel.h4}
        text={props.titleText}
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
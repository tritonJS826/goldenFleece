import styles from "src/component/filter/FilterInput.module.scss";

export type InputType = HTMLInputElement | HTMLTextAreaElement;

interface FilterInputProps {
  type: "text" | "number" | "date",
  name: string,
  value: string | number,
  onChange: (event: React.ChangeEvent<InputType>) => void;
}

export enum URL_QUERY_KEYS {
  Search = "search",
  DateIn = "dateIn",
  DateOut = "dateOut",
  Adults = "adults",
  Children = "children",
}

const MIN_INPUT_VALUE = 0;

export const FilterInput: React.FC<FilterInputProps> = (props: FilterInputProps) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {props.name}
        <input
          type={props.type}
          className={styles.input}
          name={props.name}
          value={props.value}
          min={MIN_INPUT_VALUE}
          onChange={props.onChange}
          required
        />
      </label>
    </div>
  );
};
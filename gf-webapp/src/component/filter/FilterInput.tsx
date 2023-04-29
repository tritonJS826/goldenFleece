import styles from "src/component/filter/Filter.module.scss";

export type InputType = HTMLInputElement | HTMLTextAreaElement;

interface FilterInputProps {
  type: "text" | "number" | "date",
  name: string,
  value: string | number,
  min?: string,
  onChange: (event: React.ChangeEvent<InputType>) => void;
}

export enum URL_QUERY_KEYS {
  Search = "search",
  DateIn = "dateIn",
  DateOut = "dateOut",
  Adults = "adults",
  Children = "children",
}

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
          onChange={props.onChange}
          required
        />
      </label>
    </div>
  );
};
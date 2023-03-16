import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {NavLink} from "react-router-dom";
import styles from "src/component/main/button/Button.module.scss";


export const Button = () => {
  const {dictionary} = useDictionary();

  return (
    <div className={styles.wrap}>
      <NavLink
        to="/booking"
        className={styles.button}
      >
        {dictionary.bookButtonText}
      </NavLink>
    </div>
  );
};
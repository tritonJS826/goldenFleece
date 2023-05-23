import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {BurgerLink} from "src/component/pageBorder/header/burger/burgerContent/burgerLink/BurgerLink";
import styles from "src/component/pageBorder/header/burger/burgerContent/BurgerContent.module.scss";

export const BurgerContent = () => {
  const navigation = useDictionary().dictionary.navigation;

  return (
    <div className={styles.burger_content}>
      <ul>
        <BurgerLink
          to="/"
          value={navigation.main}
        />
        <BurgerLink
          to="/rooms"
          value={navigation.rooms}
        />
        <BurgerLink
          to="/contacts"
          value={navigation.contacts}
        />
        <BurgerLink
          to="/about"
          value={navigation.aboutUs}
        />
      </ul>
    </div>
  );
};